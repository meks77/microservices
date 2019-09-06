create table addresses_classic (
  id numeric(10),
  street VARCHAR(250),
  postal_code VARCHAR(100),
  city VARCHAR(250)
);


CREATE PROCEDURE initialize_data()
language plpgsql
AS $$
BEGIN
    FOR i IN 1000000001 .. 1008000000 LOOP
        insert into addresses_classic(id, street, postal_code, city)
        values (i, 'street of ' || i, 'postal code of ' || i, 'city of ' || i);
        if i % 10000 = 0 THEN
            commit;
        end if;
    END LOOP;
    commit;
END;
$$
;

CALL initialize_data();

alter table addresses_classic add PRIMARY KEY (id);