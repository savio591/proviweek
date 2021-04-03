SELECT categories.name, sum(products.amount) FROM categories

INNER JOIN products
ON products.id_categories = categories.id

GROUP BY categories.id