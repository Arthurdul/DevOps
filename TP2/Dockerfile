# Étape de Build
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Étape d'Exécution
FROM node:14

WORKDIR /app

COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

USER node

CMD [ "node", "build/index.js" ]
