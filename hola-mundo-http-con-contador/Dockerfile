FROM node:22-alpine
WORKDIR /hola-mundo

COPY package.json package.json
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]