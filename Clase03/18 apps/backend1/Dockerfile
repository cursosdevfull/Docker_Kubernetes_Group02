FROM node:12.4.0-alpine

LABEL version="1.0.0"

ARG baseDir="backend1"

RUN apk update && apk add bash 

WORKDIR /app

COPY ${baseDir}/package*.json ./

RUN npm install

COPY ${baseDir}/ .

EXPOSE 3010

CMD [ "npm", "start" ]