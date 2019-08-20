package micronaut.mongo;

import com.mongodb.MongoClient;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import org.bson.BsonDocument;
import org.bson.Document;

import javax.inject.Inject;

import static java.util.Optional.ofNullable;

@Controller("address/{id}")
public class AddressController {

    @Inject
    private MongoClient mongoClient;

    @Get(produces = MediaType.APPLICATION_JSON)
    public String getAddress(@PathVariable(name = "id") int personId) {
        return ofNullable(
                mongoClient.getDatabase("addresses")
                        .getCollection("personAddress")
                        .find(BsonDocument.parse("{ _id: " + personId + " }"))
                        .first())
                .map(Document::toJson)
                .orElse("");
    }
}
