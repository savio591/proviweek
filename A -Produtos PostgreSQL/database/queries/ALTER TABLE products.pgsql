ALTER TABLE products
ADD CONSTRAINT categoriesId2Products
FOREIGN KEY (id_categories) 
REFERENCES categories (id);