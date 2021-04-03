INSERT INTO 
    products(id, name, amount, price, id_providers, id_categories)
VALUES
    (1, 'Blue Chair', 30, 300.00, 5, 5),
    (2, 'Red Chair', 50, 2150.00, 2, 1),
    (3, 'Disney Wardrobe', 400, 829.50, 4, 1),
    (4, 'Blue Toaster', 20, 9.90, 3, 1),
    (5, 'TV', 30, 3000.25, 2, 2)

RETURNING *;