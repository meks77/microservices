#!/bin/sh
BASEDIR=$(dirname "$0")
DATABASE=$1
DOCKERFILE=$BASEDIR/$DATABASE/Dockerfile
printf "$SPACER build go-$DATABASE with $DOCKERFILE $SPACER"
docker build -f $DOCKERFILE -t meks77/go-$DATABASE $BASEDIR/../../go/$DATABASE/
