#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build couchdb in $BASEDIR $SPACER"
docker build -t meks77/couchdb "$BASEDIR/db-build"

printf "$SPACER build couchdb datainitializer $SPACER"
docker run --rm -v $PWD/$BASEDIR/datainitializer:/home/gradle/project -v $HOME/.gradle:/home/gradle/.gradle -w /home/gradle/project gradle gradle build