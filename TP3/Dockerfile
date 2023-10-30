FROM node:19 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npx tsc

FROM node:19
WORKDIR /app

RUN adduser --no-create-home --disabled-login --group --system web_api
RUN chown web_api -R /app
USER web_api

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build

CMD node build/index.js
