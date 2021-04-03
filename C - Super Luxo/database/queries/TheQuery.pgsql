SELECT products.name, providers.name, products.price from products

INNER JOIN categories
ON (categories.id = products.id_categories)

INNER JOIN providers
ON (providers.id = products.id_providers)

WHERE products.price > 1000 AND products.id_categories = 1