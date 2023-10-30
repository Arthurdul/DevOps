FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

USER node

CMD [ "node", "build/index.js" ]
