package at.meks.microservices.spring.mongo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AddressController {

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @GetMapping(value = "/address/{id}")
    public Address getAddress(@PathVariable Long id) {
        System.out.println("Search address for " + id);
        final Optional<Address> found = addressRepository.findById(id);
        System.out.println("addressFound: " + found.isPresent());
        return found.orElse(null);
    }
}
