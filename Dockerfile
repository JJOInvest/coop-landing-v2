FROM node:18.17-alpine

ARG ZENDESK_URL
ARG ZENDESK_TOKEN

RUN apk add --no-cache git

WORKDIR /app

COPY . ./

ENV ZENDESK_URL=$ZENDESK_URL
ENV ZENDESK_TOKEN=$ZENDESK_TOKEN

RUN yarn install --frozen-lockfile

RUN yarn build

CMD [ "yarn", "dev" ]