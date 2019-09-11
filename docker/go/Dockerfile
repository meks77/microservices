FROM golang:alpine

WORKDIR /go/src

RUN apk add build-base && apk add git && rm -rf /var/cache/apk/*

RUN go get -u github.com/gorilla/mux
