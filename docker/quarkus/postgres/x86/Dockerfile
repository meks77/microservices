FROM openjdk:8-alpine
ENV JAVA_OPTIONS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV AB_ENABLED=jmx_exporter
COPY build/*-runner.jar app.jar
COPY build/lib lib
CMD [ "java", "-jar", "app.jar" ]
EXPOSE 8080