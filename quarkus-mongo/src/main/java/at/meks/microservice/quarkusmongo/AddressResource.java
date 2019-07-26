package at.meks.microservice.quarkusmongo;

import com.mongodb.client.MongoClient;
import io.quarkus.mongodb.ReactiveMongoClient;
import org.bson.Document;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.CompletionStage;

@Path("/address")
public class AddressResource {

//    @Inject
//    private MongoClient mongoClient;

    @Inject
    private ReactiveMongoClient reactiveMongoClient;

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public CompletionStage<String> getAddress(@PathParam("id") int personId) {
        return reactiveMongoClient.getDatabase("addresses")
                .getCollection("personAddress")
                .find(new Document().append("_id", personId))
                .findFirst()
                .run().thenApply(s -> s.map(Document::toJson).orElse(""));

//        MongoIterable<Document> documents = mongoClient.getDatabase("addresses")
//                .getCollection("personAddress")
//                .find(new Document().append("_id", personId));
//        return Optional.ofNullable(documents.first()).map(Document::toJson).orElse("");
    }
}
