#!/bin/sh
NETWORK_NAME=meks77-microservice-network
FOUND_NET=`docker network ls --format "{{.Name}}" | grep $NETWORK_NAME`

if [ -z "$FOUND_NET" ]
then
    docker network create $NETWORK_NAME
fi