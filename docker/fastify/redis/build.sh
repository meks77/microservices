#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build fastify-redis in $BASEDIR $SPACER"
docker build  -f $BASEDIR/Dockerfile -t meks77/fastify-redis $BASEDIR/../../../fastify/redis/