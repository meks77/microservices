FROM meks77/graalvm-builder as graalvm
ENV APP_HOME=/home/app/
WORKDIR $APP_HOME
COPY build.gradle settings.gradle gradlew $APP_HOME
COPY gradle $APP_HOME/gradle
# start build to download gradle and deps
RUN chmod +x gradlew
RUN ./gradlew build
COPY src src
RUN ./gradlew buildNative --docker-build=false

FROM oracle/graalvm-ce:latest
ENV APP_HOME=/home/app/
COPY --from=graalvm /home/app/build/*-runner ./application
RUN chmod +x application
EXPOSE 8080
CMD ["./application", "-Dquarkus.http.host=0.0.0.0"]