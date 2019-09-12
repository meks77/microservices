FROM arm64v8/openjdk:11-jre-slim
COPY build/libs/spring-mongo*.jar app.jar
CMD [ "java", "-jar", "app.jar" ]
EXPOSE 8080
