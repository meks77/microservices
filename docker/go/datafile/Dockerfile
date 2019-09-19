FROM meks77/go

ENV APP_SRC=/go/src/github.com/meks77/go-datafile

RUN mkdir -p $APP_SRC
WORKDIR $APP_SRC

COPY main.go .
RUN go build

FROM golang:alpine
ENV APP_SRC=/go/src/github.com/meks77/go-datafile
COPY --from=0 $APP_SRC/go-datafile .

CMD ["./go-datafile"]
EXPOSE 10005
