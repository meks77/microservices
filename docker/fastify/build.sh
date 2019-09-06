#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build fastify in $BASEDIR $SPACER"

docker build -t meks77/fastify $BASEDIR/.
$BASEDIR/couchdb/build.sh
$BASEDIR/mongo/build.sh