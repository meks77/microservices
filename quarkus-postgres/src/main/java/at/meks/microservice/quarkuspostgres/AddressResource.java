package at.meks.microservice.quarkuspostgres;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/address/{id}")
@Produces(MediaType.APPLICATION_JSON)
public class AddressResource {

    @GET
    public Address getAddress(@PathParam("id") long personId) {
        return Address.findById(personId);
    }

}
