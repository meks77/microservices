FROM meks77/go

ENV APP_SRC=/go/src/github.com/meks77/go-filesystem

RUN mkdir -p $APP_SRC
WORKDIR $APP_SRC

COPY main.go .
RUN go build

FROM golang:alpine
ENV APP_SRC=/go/src/github.com/meks77/go-filesystem
COPY --from=0 $APP_SRC/go-filesystem .

CMD ["./go-filesystem"]
EXPOSE 10005
