FROM node:20-alpine AS base

ARG ZENDESK_URL
ARG ZENDESK_TOKEN
ARG NEXT_PUBLIC_API_DOMAIN
ARG NEXT_SHARP_PATH

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

ENV ZENDESK_URL=$ZENDESK_URL
ENV ZENDESK_TOKEN=$ZENDESK_TOKEN
ENV NEXT_PUBLIC_API_DOMAIN=$NEXT_PUBLIC_API_DOMAIN
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

CMD [ "yarn", "start" ]
