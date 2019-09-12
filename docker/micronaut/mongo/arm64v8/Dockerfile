FROM arm64v8/openjdk:11-jre-slim
WORKDIR /root/
COPY build/distributions/micronaut-mongo-0.1.tar .
RUN tar xvf micronaut-mongo-0.1.tar && rm micronaut-mongo-0.1.tar && chmod +x micronaut-mongo-0.1/bin/micronaut-mongo
WORKDIR micronaut-mongo-0.1/bin
CMD [ "./micronaut-mongo" ]
EXPOSE 8080