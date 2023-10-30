FROM node:19
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npx tsc

RUN adduser --no-create-home --group --disabled-login --system web_api
RUN chown web_api -R /app
USER web_api

CMD node build/index.js