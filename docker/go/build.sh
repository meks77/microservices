#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build go in $BASEDIR $SPACER"
docker build -t meks77/go -f $BASEDIR/Dockerfile .
$BASEDIR/mongo/build.sh