FROM golang:alpine

WORKDIR /go/src

RUN apk add git && rm -rf /var/cache/apk/*

RUN mkdir -p github.com/meks77/go-mongo
WORKDIR /go/src/github.com/meks77/go-mongo

COPY setup-go-mongo-deps.sh .

RUN go get -u github.com/gorilla/mux
RUN sh setup-go-mongo-deps.sh

COPY main.go .
RUN go install

CMD ["go-mongo"]
EXPOSE 10005