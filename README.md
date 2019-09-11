# microservices
Comparsion of implementations for a simple read json webservice in different technologies)

Different technologies (Java JEE, Micronaut, Quarkus, Spring, Golang, Fastify, Gettify, Erlang, Rust, C++) in combination with different stores (mongo, couchdb, redis, postgres, mariadb, filesystem,...) are compared by runtime statistics, implementation effort, maintainability, ...

## Use case
A simple JSON web service, which provides addresses of millions of people.

## Target
### Runtime
To be reproducable by (hopefully) everyone, every runtime is provided as container. To avoid creating spam images on hub.docker.com, the images must be build locally.

The serivce is available by the following url:

http://hostName:port/address/{id}

### Runtime statistics
Resource usage (memory, image size, load,...) and the throughput performance will be compared. The hardware will be a e.g. a raspberry pi4.

## HowTo
### Build
First of all you need to build the images. Therfore just execute the build.sh in the docker directory. All available images will be created.

### Before the first run
Create the directories
* /opt/microservices/mongo
* /opt/microservices/couchdb
* /opt/microservices/redis
* /opt/microservices/postgres

#### Initialize Database data
##### Mongo
Mongo is intialized automaticall on the first start. Therfor the first start takes more time.

#### CouchDB
TODO: Describe DataInitializer

#### Redis
TODO: Describe usage of sh scripts

#### Postgres
TODO: Describe usage of sql 

### Run

In the directory docker the executable run_container.sh is available. It takes 2 arguments

* database technology(mongo, couchdb, redis, postgres)
* implementation technology(fastify, go, micronaut, quarkus, wildfly, spring)

If you want to start a fastify instance which connects to mongo invoke the following:

```bash
./run_instance.sh mongo fastify
```

Afterwards you have to finde out the port, to which the service is listening. Do this with the docker command "docker ps".

Now you can use the url from above and replace host, port and id with values.

### Measure runtime statistics
Either use your preferred measuring tool, or use the provided load test.

TODO: Describe how to build and run the loadtest

TODO: 
