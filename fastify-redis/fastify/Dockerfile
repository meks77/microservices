FROM node:lts-alpine
RUN mkdir /opt/fastify
WORKDIR /opt/fastify
RUN npm i fastify --save && npm i fastify-redis --save
COPY *.js ./
ENTRYPOINT ["node", "server"]
EXPOSE 3000
