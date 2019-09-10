FROM meks77/graalvm-builder as graalvm

ENV APP_HOME=/home/app/
WORKDIR $APP_HOME

COPY . .
RUN chmod +x gradlew
RUN ./gradlew buildNative --docker-build=false

FROM oracle/graalvm-ce:latest
ENV APP_HOME=/home/app/
COPY --from=graalvm /home/app/build/*-runner ./application
RUN chmod +x application
EXPOSE 8083
CMD ["./application", "-Dquarkus.http.host=0.0.0.0"]