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

printf "$SPACER build java micronaut $DATABASE $SPACER"
docker run --rm -v $PWD/$BASEDIR/../../micronaut/$DATABASE:/home/gradle/project -v $HOME/.gradle:/home/gradle/.gradle -w /home/gradle/project gradle:jdk8 gradle build

printf "$SPACER build docker image micronaut-$DATABASE with $DOCKERFILE $SPACER"
docker build -f $DOCKERFILE -t $IMAGE_NAME $BASEDIR/../../micronaut/$DATABASE/
