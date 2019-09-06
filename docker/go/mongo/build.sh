#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build go-mongo in $BASEDIR $SPACER"
docker build -f $BASEDIR/Dockerfile -t meks77/go-mongo $BASEDIR/../../../go/mongo/
