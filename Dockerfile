FROM node:16-alpine3.14

WORKDIR /var/www/html

RUN apk update

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]