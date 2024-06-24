FROM node:18.17-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY . ./

RUN yarn install --frozen-lockfile

RUN yarn build

CMD [ "yarn", "dev" ]