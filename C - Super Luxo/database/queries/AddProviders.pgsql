INSERT INTO 
    providers(id, name, street, city, state)
VALUES
    (1, 'Ajax SA', 'Rua Presidente Castelo Branco', 'Porto Alegre', 'RS'),
    (2, 'Sansul SA', 'Av Brasil', 'Rio de Janeiro', 'RJ'),
    (3, 'South Chairs', 'Rua do Moinho', 'Santa Maria', 'RS'),
    (4, 'Elon Electro', 'Rua Apolo', 'São Paulo', 'SP'),
    (5, 'Mike electro', 'Rua Pedro da Cunha', 'Cutiriba', 'PR')

RETURNING *;