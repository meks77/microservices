package at.meks.microservice.quarkuspostgres;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;

@Path("/address/{id}")
@Produces(MediaType.APPLICATION_JSON)
public class AddressResource {

    @Inject
    AddressRepo addressRepo;

    @GET
    public String getAddress(@PathParam("id") long personId) throws IOException {
        return addressRepo.findById(personId);
    }

}
