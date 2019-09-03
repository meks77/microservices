package at.meks.microservices.spring.mongo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressController {

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @GetMapping(value = "/address/{id}")
    public Address getAddress(@PathVariable Long id) {
        return addressRepository.findById(id).orElse(null);
    }
}
