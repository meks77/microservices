package at.meks.microservice.quarkuspostgres;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "addresses_classic")
public class Address extends PanacheEntity {

    public String street;
    @Column(name = "postal_code")
    public String postalCode;
    public String city;

}
