INSERT INTO 
    products(id, name, amount, price, id_categories)
VALUES
    (1, 'Two-doors wardrobe', 100, 800, 1),
    (2, 'Dining table', 1000, 560, 3),
    (3, 'Towel holder', 10000, 25.50, 4),
    (4, 'Computer desk', 350, 320.50, 2),
    (5, 'Chair', 3000, 210.64, 4),
    (6, 'Single bed', 750, 460, 1)

RETURNING *;