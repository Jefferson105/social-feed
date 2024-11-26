FROM node:20-alpine

WORKDIR /usr/src/app

# Bundle APP files
COPY src src/
COPY package.json .
COPY tsconfig.json .
COPY .env .

RUN rm -rf node_modules && yarn install && yarn cache clean
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
