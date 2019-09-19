#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build fastify in $BASEDIR $SPACER"

docker build -t meks77/fastify $BASEDIR/.
$BASEDIR/buildInstance.sh couchdb
$BASEDIR/buildInstance.sh mongo
$BASEDIR/buildInstance.sh redis
$BASEDIR/buildInstance.sh datafile
