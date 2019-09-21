#!/bin/sh
BASEDIR=$(dirname "$0")
DATABASE=$1
printf "$SPACER build fastify-$DATABASE in $BASEDIR $SPACER"
docker build  -f $BASEDIR/$DATABASE/Dockerfile -t meks77/fastify-$DATABASE $BASEDIR/../../fastify/$DATABASE/