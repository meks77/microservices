FROM arm64v8/openjdk:11-jre-slim
ENV JAVA_OPTIONS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV AB_ENABLED=jmx_exporter
COPY build/lib/* lib/
COPY build/*-runner.jar app.jar
CMD [ "java", "-jar", "app.jar" ]
EXPOSE 8080