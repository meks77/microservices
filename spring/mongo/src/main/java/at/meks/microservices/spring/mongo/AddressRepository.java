package at.meks.microservices.spring.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AddressRepository extends MongoRepository<Address, Long> {

}
