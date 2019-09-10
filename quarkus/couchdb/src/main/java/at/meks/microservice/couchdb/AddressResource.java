package at.meks.microservice.couchdb;

import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/address")
public class AddressResource {

    @Inject
    @RestClient
    private CouchdbAddressService addressService;

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Address getAddress(@PathParam("id") int personId) {
        return addressService.getAddress(personId);
    }
}
