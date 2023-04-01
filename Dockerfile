FROM node:18.13-alpine3.16

WORKDIR /app

COPY . /app/

RUN npm i --legacy-peer-deps

ENTRYPOINT npm start