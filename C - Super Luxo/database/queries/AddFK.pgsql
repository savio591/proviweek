ALTER TABLE products
ADD CONSTRAINT joinProductsWithProviderId
FOREIGN KEY (id_providers)
REFERENCES providers (id);

ALTER TABLE products
ADD CONSTRAINT joinProductsWithCategoriesId
FOREIGN KEY (id_categories) 
REFERENCES categories (id);