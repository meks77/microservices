package at.meks.microservices.wildfly.mongo;

import com.mongodb.DBObject;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static com.mongodb.BasicDBObjectBuilder.start;

@Named
@RequestScoped
@Path("/address")
public class AddressService {

    @Inject
    private MongoDataSource mongoDataSource;

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAddress(@PathParam("id") int id) {
        DBObject filter = start("_id", id).get();
        return mongoDataSource.getAddresses()
                .findOne(filter)
                .toString();
    }
}
