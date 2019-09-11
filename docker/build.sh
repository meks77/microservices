#!/bin/sh
export SPACER="\n==============================\n"
export DEFAULT_ARCHITECTURE=x86
export ARCHITECTURE=$1
export NATIVE=$2

if [ -z "$ARCHITECTURE" ]
then
  export ARCHITECTURE=$DEFAULT_ARCHITECTURE;
fi;

if [ "$ARCHITECTURE" != "x86" ] && [ "$ARCHITECTURE" != "arm64v8" ]
then
  echo "unsupported architecture $ARCHITECTURE"
  echo "supported architectures: x86, arm64v8"
  exit 1;
fi;

if [ "$NATIVE" != "" ] && [ "$NATIVE" != "native"]
then
  echo "unsupported value for native flag: $NATIVE"
  exit 1;
fi;

echo "Build architecture $ARCHITECTURE"
echo "Build native java images if available: $NATIVE"

databases/build.sh
fastify/build.sh
go/build.sh
./create_graalvm_builder_image.sh
micronaut/build.sh
quarkus/build.sh
spring/build.sh
wildfly/build.sh