package at.meks.microservices.wildfly.mongo;

import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import java.net.UnknownHostException;

import static java.util.Optional.ofNullable;
import static org.apache.commons.lang3.StringUtils.trimToNull;

@Named
@ApplicationScoped
public class MongoDataSource {

    private MongoClient mongoClient;

    private DBCollection addresses;

    private String mongoHost = System.getenv("MONGO_HOST");

    private String mongoPort = System.getenv("MONGO_PORT");

    @PostConstruct
    public void initConnections() throws UnknownHostException {
        mongoClient = new MongoClient(ofNullable(trimToNull(mongoHost)).orElse("localhost"),
                ofNullable(trimToNull(mongoPort)).map(Integer::parseInt).orElse(27017));
         addresses = mongoClient.getDB("addresses").getCollection("personAddress");
    }

    @PreDestroy
    public void closeConnections() {
        ofNullable(mongoClient).ifPresent(MongoClient::close);
    }

    DBCollection getAddresses() {
        return addresses;
    }

}
