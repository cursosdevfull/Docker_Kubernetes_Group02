FROM node:14.15.3-alpine as BUILD

RUN apk update && apk upgrade && apk add --update bash

WORKDIR /work

COPY package.json ./package.json

RUN npm install

# /work/node_modules

# ===============================================
FROM node:14.15.3-alpine

WORKDIR /work

COPY --from=BUILD /work/node_modules ./node_modules

ENV PORT=7500

COPY server.js ./server.js

EXPOSE 7500

CMD ["node", "server.js"]