FROM meks77/go

ENV APP_SRC=/go/src/github.com/meks77/go-redis
RUN mkdir -p github.com/meks77/go-redis

WORKDIR $APP_SRC

RUN go get -u github.com/gorilla/mux
RUN go get -u github.com/go-redis/redis

COPY main.go .
RUN go build

FROM golang:alpine
ENV APP_SRC=/go/src/github.com/meks77/go-redis
COPY --from=0 $APP_SRC/go-redis .

CMD ["./go-redis"]
EXPOSE 10004