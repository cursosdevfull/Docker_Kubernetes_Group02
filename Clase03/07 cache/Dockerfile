FROM node:14.15.3-alpine

RUN apk update && apk upgrade && apk add --update bash

WORKDIR /work

COPY package.json ./package.json

RUN npm install

COPY server.js ./server.js

ENV PORT=7500



EXPOSE 7500

CMD ["node", "server.js"]