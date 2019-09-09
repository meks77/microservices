FROM meks77/graalvm-builder as graalvm

WORKDIR /home/app/micronaut-mongo-app
COPY . .
RUN native-image --no-server -jar build/libs/micronaut-mongo-*-all.jar

FROM frolvlad/alpine-glibc
EXPOSE 8080
COPY --from=graalvm /home/app/micronaut-mongo-app .
ENTRYPOINT ["./micronaut-mongo-app"]