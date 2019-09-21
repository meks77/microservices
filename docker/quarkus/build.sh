#!/bin/sh
BASEDIR=$(dirname "$0")
$BASEDIR/build_instance.sh couchdb
$BASEDIR/build_instance.sh mongo
$BASEDIR/build_instance.sh postgres
$BASEDIR/build_instance.sh redis
$BASEDIR/build_instance.sh datafile