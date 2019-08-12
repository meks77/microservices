#!/bin/sh
# shell file to supress return value 1 from mongo driver installation

go get -u go.mongodb.org/mongo-driver
exit 0