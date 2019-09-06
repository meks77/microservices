#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build fastify-mongo in $BASEDIR $SPACER"
docker build  -f $BASEDIR/Dockerfile -t meks77/fastify-mongo $BASEDIR/../../../fastify/mongo/