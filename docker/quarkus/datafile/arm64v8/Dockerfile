FROM arm64v8/openjdk:11-jre-slim
ENV JAVA_OPTIONS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV AB_ENABLED=jmx_exporter
ENV MS_DATA_FILE=/opt/microservices/datafile/dataFile
COPY build/*-runner.jar quarkus-datafile.jar
COPY build/lib lib
CMD [ "java", "-jar", "quarkus-datafile.jar" ]
EXPOSE 8080