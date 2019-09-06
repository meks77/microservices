#!/bin/sh
BASEDIR=$(dirname "$0")
printf "$SPACER build mongo in $BASEDIR $SPACER"
docker build -t meks77/mongo "$BASEDIR"