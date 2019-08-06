package at.meks.microservice.couchdb;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/address")
public class AddressResource {

    @Inject
    private AddressService addressService;

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAddress(@PathParam("id") String personId) {
        return addressService.getAddress(personId);
    }
}
