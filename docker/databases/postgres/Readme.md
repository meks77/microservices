# Start a docker instance with mounted volume and initialize data:

```bash
docker run -v /opt/microservices/postgres:/var/lib/postgresql/data $
    -v /home/mhager/git/microservices/postgres/initialize_data.sql:/docker-entrypoint-initdb.d/initialize_data.sql $
    --name postgres postgres:alpine 
```


