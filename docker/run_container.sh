#!/bin/bash
DATABASE=$1
ENVIRONMENT=$2

DOCKER_IMAGE_NAME=meks77/$ENVIRONMENT-$DATABASE
DOCKER_CONTAINER_NAME=meks77-$ENVIRONMENT-$DATABASE

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
  CMD="docker run -P -d --name $DOCKER_CONTAINER_NAME --network=meks77-microservice-network $DOCKER_IMAGE_NAME"
  echo $CMD
  $CMD
else
  echo "Container is already running!"
  exit 1
fi

