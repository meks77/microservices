#!/bin/sh
BASEDIR=$(dirname "$0")
$BASEDIR/couchdb/build.sh

$BASEDIR/build_db.sh mongo
$BASEDIR/build_db.sh redis
$BASEDIR/build_db.sh postgres
