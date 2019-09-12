#!/bin/sh
BASEDIR=$(dirname "$0")
DATABASE=$1
if [ "$NATIVE" = "native" ]
then
  DOCKERFILE=$BASEDIR/$DATABASE/$ARCHITECTURE-native/Dockerfile
else
  DOCKERFILE=$BASEDIR/$DATABASE/$ARCHITECTURE/Dockerfile
fi;

if [ -z "$NATIVE" ]
then
    IMAGE_NAME=meks77/micronaut-$DATABASE
else
    IMAGE_NAME=meks77/micronaut-$DATABASE-native
fi;

if [ "$ARCHITECTURE" = "arm64v8" ]
then
  GRADLE_IMAGE=$ARCHITECTURE/gradle:jdk8-alpine
else
  GRADLE_IMAGE=gradle:jdk8
fi;

printf "$SPACER build java micronaut $DATABASE $SPACER"
docker run --rm -v $PWD/$BASEDIR/../../micronaut/$DATABASE:/home/gradle/project -v $HOME/.gradle:/home/gradle/.gradle -w /home/gradle/project $GRADLE_IMAGE gradle build

printf "$SPACER build docker image micronaut-$DATABASE with $DOCKERFILE $SPACER"
docker build -f $DOCKERFILE -t $IMAGE_NAME $BASEDIR/../../micronaut/$DATABASE/
