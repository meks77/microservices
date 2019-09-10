package at.meks.microservice.couchdb;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AddressService {

    private JedisPool pool = new JedisPool("redis");

    String getAddress(String personId) {
        try (Jedis poolResource = pool.getResource()) {
            return poolResource.get(personId);
        }
    }
}
