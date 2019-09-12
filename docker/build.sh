#!/bin/sh
export SPACER="\n==============================\n"
export DEFAULT_ARCHITECTURE=x86
export NATIVE=$1
ARCH=`docker info | grep aarch64`
if [ -z "$ARCH" ]
then
  export ARCHITECTURE=$DEFAULT_ARCHITECTURE;
else
  export ARCHITECTURE=arm64v8
fi;

if [ "$NATIVE" != "" ] && [ "$NATIVE" != "native" ]
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