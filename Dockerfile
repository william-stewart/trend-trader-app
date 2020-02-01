FROM node:10-alpine

COPY ./trendtraderjs/package*.json ./

RUN npm install

COPY ./trendtraderjs ./

EXPOSE 8085

CMD [ "npm", "start", "Server.js" ]