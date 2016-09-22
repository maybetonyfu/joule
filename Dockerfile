FROM node:6.6.0

MAINTAINER tony <tonyfu.dev@gmail.com>

RUN npm install -g pm2

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install --production

CMD pm2 start index.js --name data-translater
