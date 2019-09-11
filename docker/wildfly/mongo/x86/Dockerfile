FROM jboss/wildfly:17.0.0.Final
ENV APP_HOME=/usr/app
ENV MONGO_HOST=mongo
COPY build/libs/wildfly-mongo-*.war /opt/jboss/wildfly/standalone/deployments/
EXPOSE 8080