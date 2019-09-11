#!/bin/sh
BASEDIR=$(dirname "$0")
DATABASE=$1
DOCKERFILE=$BASEDIR/$DATABASE/$ARCHITECTURE/Dockerfile
IMAGE_NAME=meks77/spring-$DATABASE

printf "$SPACER build java spring $DATABASE $SPACER"
docker run --rm -v $PWD/$BASEDIR/../../spring/$DATABASE:/home/gradle/project -v $HOME/.gradle:/home/gradle/.gradle -w /home/gradle/project gradle:jdk12 gradle bootJar

printf "$SPACER build docker image spring-$DATABASE with $DOCKERFILE $SPACER"
docker build -f $DOCKERFILE -t $IMAGE_NAME $BASEDIR/../../spring/$DATABASE/
