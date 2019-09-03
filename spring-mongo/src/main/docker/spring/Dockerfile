FROM gradle as build
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
#COPY build.gradle settings.gradle gradlew ./
#COPY gradle ./gradle
# start build to download gradle and deps
#RUN gradle build
COPY . ./
RUN gradle bootJar

FROM openjdk:alpine
ENV APP_HOME=/usr/app
COPY --from=build $APP_HOME/build/libs/spring-mongo*.jar app.jar
CMD [ "java", "-jar", "app.jar" ]
EXPOSE 8080