FROM meks77/go

ENV APP_SRC=/go/src/github.com/meks77/go-mongo
RUN mkdir -p github.com/meks77/go-mongo

WORKDIR $APP_SRC

RUN go get -u github.com/gorilla/mux
RUN go get go.mongodb.org/mongo-driver; exit 0

COPY main.go .
RUN go build

FROM golang:alpine
ENV APP_SRC=/go/src/github.com/meks77/go-mongo
COPY --from=0 $APP_SRC/go-mongo .

CMD ["./go-mongo"]
EXPOSE 10005
