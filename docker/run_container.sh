#!/bin/bash
DATABASE=$1
ENVIRONMENT=$2
NATIVE=$3

DOCKER_IMAGE_NAME=meks77/$ENVIRONMENT-$DATABASE
DOCKER_CONTAINER_NAME=meks77-$ENVIRONMENT-$DATABASE

if [ "$NATIVE" != "" ]
then
  DOCKER_IMAGE_NAME=$DOCKER_IMAGE_NAME-native
  DOCKER_CONTAINER_NAME=$DOCKER_CONTAINER_NAME-native
fi;

./initDockerNetwork.sh
databases/run_database_container.sh $DATABASE

RUNNING_CONTAINER=`docker container ls --format "{{.Names}}" | grep $DOCKER_CONTAINER_NAME`

if [ -z "$RUNNING_CONTAINER" ]
then
  STOPPED_CONTAINER=`docker container ls -a --format "{{.Names}}" | grep $DOCKER_CONTAINER_NAME`
  if [ "$STOPPED_CONTAINER" = "$DOCKER_CONTAINER_NAME" ]
  then
    docker rm $DOCKER_CONTAINER_NAME
  fi
  if [ "$DATABASE" = "datafile" ]
  then
    VOLUME_MOUNT="-v /opt/microservices/datafile/dataFile:/opt/microservices/datafile/dataFile"
  fi
  CMD="docker run -P -d --name $DOCKER_CONTAINER_NAME --network=meks77-microservice-network --rm $VOLUME_MOUNT $DOCKER_IMAGE_NAME"
  echo $CMD
  $CMD
else
  echo "Container is already running!"
  exit 1
fi

