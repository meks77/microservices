#!/bin/sh
BASEDIR=$(dirname "$0")
DATABASE=$1
DOCKERFILE=$BASEDIR/$DATABASE/$ARCHITECTURE/Dockerfile
IMAGE_NAME=meks77/wildfly-$DATABASE

printf "$SPACER build java wildfly $DATABASE $SPACER"
docker run --rm -v $PWD/$BASEDIR/../../wildfly/$DATABASE:/home/gradle/project -v $HOME/.gradle:/home/gradle/.gradle -w /home/gradle/project gradle:jdk12 gradle build

printf "$SPACER build docker image wildfly-$DATABASE with $DOCKERFILE $SPACER"
docker build -f $DOCKERFILE -t $IMAGE_NAME $BASEDIR/../../wildfly/$DATABASE/
