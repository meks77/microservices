#!/bin/sh
BASEDIR=$(dirname "$0")
$BASEDIR/couchdb/build.sh
$BASEDIR/mongo/build.sh