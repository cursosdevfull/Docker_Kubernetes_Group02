FROM node:14.15.3-alpine

WORKDIR /work

COPY package.json ./package.json

RUN npm install

ENV PORT=7500

COPY server.js ./server.js

EXPOSE 7500

CMD ["node", "server.js"]