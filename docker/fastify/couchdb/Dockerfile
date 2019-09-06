FROM meks77/fastify
WORKDIR /opt/fastify
RUN npm i fastify-http-client --save
COPY *.js ./
ENTRYPOINT ["node", "server"]