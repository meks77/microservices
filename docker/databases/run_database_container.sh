#!/bin/sh
if [ -z "$1" ]
then
  echo "database name must set as first arg (e.g. couchdb, mongo, postgres, ...)"
  exit 1;
fi

#if [ -z "$2" ]
#then
#  echo "data directory of the image must be set as second directory(e.g. /opt/couchdb/data/)"
#  exit 1;
#fi

DATABASE_NAME=$1
CONTAINER_NAME="meks77-$DATABASE_NAME"
IMAGE_NAME="meks77/$DATABASE_NAME"

if [ "$DATABASE_NAME" = "mongo" ]
then
  echo "db is mongo"
  CONTAINER_PATH=/data/db
elif [ "$DATABASE_NAME" = "couchdb" ]
then
  echo "db is couchdb"
  CONTAINER_PATH=/opt/couchdb/data
elif [ "$DATABASE_NAME" = "redis" ]
then
  CONTAINER_PATH=/data/
elif [ "$DATABASE_NAME" = "postgres" ]
then
  CONTAINER_PATH=/var/lib/postgresql/data
elif [ "$DATABASE_NAME" = "filesystem" ]
then
  echo "nothing to start in case of filesystem"
  exit 0
else
  echo "unsupported database $DATABASE_NAME"
  exit 1
fi

VOLUME_MOUNT="/opt/microservices/$DATABASE_NAME:$CONTAINER_PATH"

RUNNING_CONTAINER=`docker container ls --format "{{.Names}}" | grep $CONTAINER_NAME`

if [ -z "$RUNNING_CONTAINER" ]
then
  STOPPED_CONTAINER=`docker container ls -a --format "{{.Names}}" | grep $CONTAINER_NAME`
  if [ -z "$STOPPED_CONTAINER" ]
  then
    docker run -d --name $CONTAINER_NAME -v $VOLUME_MOUNT --network=meks77-microservice-network --network-alias=$DATABASE_NAME --rm $IMAGE_NAME
  else
    docker start $CONTAINER_NAME
  fi
fi
