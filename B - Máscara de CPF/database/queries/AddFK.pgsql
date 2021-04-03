ALTER TABLE natural_person
ADD CONSTRAINT joinCustomersId
FOREIGN KEY (id_customers) 
REFERENCES customers (id);