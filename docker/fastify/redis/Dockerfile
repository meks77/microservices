FROM meks77/fastify
WORKDIR /opt/fastify
RUN npm i fastify-redis --save
COPY *.js ./
ENTRYPOINT ["node", "server"]
EXPOSE 3000
