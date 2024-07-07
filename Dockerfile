FROM node:20-alpine AS base

ARG ZENDESK_URL
ARG ZENDESK_TOKEN
ARG NEXT_PUBLIC_API_DOMAIN
ARG NEXT_SHARP_PATH

RUN apk add --no-cache git libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

ENV ZENDESK_URL=$ZENDESK_URL
ENV ZENDESK_TOKEN=$ZENDESK_TOKEN
ENV NEXT_PUBLIC_API_DOMAIN=$NEXT_PUBLIC_API_DOMAIN
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:20-alpine AS release

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next

CMD ["yarn", "start"]
