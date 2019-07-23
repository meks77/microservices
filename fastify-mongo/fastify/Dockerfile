FROM node:lts-alpine
RUN mkdir /opt/fastify
WORKDIR /opt/fastify
RUN npm i fastify --save && npm i fastify-mongodb --save
COPY *.js ./
#COPY package.json .
ENTRYPOINT ["node", "server"]
EXPOSE 3000
