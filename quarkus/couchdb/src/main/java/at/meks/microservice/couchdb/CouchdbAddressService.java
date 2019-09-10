package at.meks.microservice.couchdb;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.xml.ws.Response;

@Path("/addresses")
@RegisterRestClient
public interface CouchdbAddressService {

    @GET
    @Path("/{personId}")
    @Produces("application/json")
    Address getAddress(@PathParam("personId") int personId);

}
