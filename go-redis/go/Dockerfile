FROM golang:alpine

WORKDIR /go/src

RUN apk add git && rm -rf /var/cache/apk/*

RUN mkdir -p github.com/meks77/go-redis
WORKDIR /go/src/github.com/meks77/go-redis

RUN go get -u github.com/gorilla/mux && \
  go get -u github.com/go-redis/redis

COPY main.go .

RUN go install

CMD ["go-redis"]