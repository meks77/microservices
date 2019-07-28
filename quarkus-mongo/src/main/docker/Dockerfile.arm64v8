FROM arm64v8/openjdk:11-jre-slim
ENV JAVA_OPTIONS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV AB_ENABLED=jmx_exporter
COPY *-runner.jar app.jar
COPY lib/* lib/
CMD [ "java", "-jar", "app.jar" ]
EXPOSE 8080