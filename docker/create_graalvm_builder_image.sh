printf "$SPACER build graalvm builder image $SPACER"
docker build -t meks77/graalvm-builder -f graalvm-builder/Dockerfile .