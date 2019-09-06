#!/bin/sh
BASEDIR=$(dirname "$0")
CONTAINER_NAME="meks77-fastify-couchdb"
IMAGE_NAME="meks77/fastify-couchdb"
RUNNING_CONTAINER=`docker container ls --format "{{.Names}}" | grep $CONTAINER_NAME`

$BASEDIR/../../database/run_database_container.sh couchdb

if [ -z "$RUNNING_CONTAINER" ]
then
  STOPPED_CONTAINER=`docker container ls -a --format "{{.Names}}" | grep $CONTAINER_NAME`
  if [ -z "$STOPPED_CONTAINER" ]
  then
    docker run --name $CONTAINER_NAME -v $VOLUME_MOUNT $IMAGE_NAME
  else
    docker start $CONTAINER_NAME
  fi
fi

