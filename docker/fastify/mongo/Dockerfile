FROM meks77/fastify
WORKDIR /opt/fastify
RUN npm i fastify-mongodb --save
COPY *.js ./
ENTRYPOINT ["node", "server"]
EXPOSE 3000
