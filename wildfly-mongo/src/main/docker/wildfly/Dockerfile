FROM gradle as build
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY build.gradle settings.gradle gradlew ./
COPY gradle ./gradle
# start build to download gradle and deps
RUN gradle build
COPY . ./
RUN gradle build

FROM jboss/wildfly:17.0.0.Final
ENV APP_HOME=/usr/app
COPY --from=build $APP_HOME/build/libs/wildfly-mongo-*.war /opt/jboss/wildfly/standalone/deployments/
EXPOSE 8080