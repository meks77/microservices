#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build fastify-couchdb in $BASEDIR $SPACER"
docker build  -f $BASEDIR/Dockerfile -t meks77/fastify-couchdb $BASEDIR/../../../fastify/couchdb/