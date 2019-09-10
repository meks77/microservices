package at.meks.microservice.quarkusmongo;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoIterable;
import org.bson.Document;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Optional;
@Path("/address")
public class AddressResourceMongoClient {

    @Inject
    private MongoClient mongoClient;

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAddress(@PathParam("id") int personId) {
        MongoIterable<Document> documents = mongoClient.getDatabase("addresses")
                .getCollection("personAddress")
                .find(new Document().append("_id", personId));
        return Optional.ofNullable(documents.first()).map(Document::toJson).orElse("");
    }
}
