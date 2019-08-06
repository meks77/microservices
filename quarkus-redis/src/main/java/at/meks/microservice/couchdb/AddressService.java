package at.meks.microservice.couchdb;

import redis.clients.jedis.Jedis;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AddressService {

    private Jedis jedis = new Jedis("redisdb");

    public String getAddress(String personId) {
        return jedis.get(personId);
    }
}
