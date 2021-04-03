SELECT substr(cpf, 1, 3) || '.' ||
       substr(cpf, 4, 3) || '.' ||
       substr(cpf, 7, 3) || '-' ||
       substr(cpf, 10) as CPF

FROM natural_person

INNER JOIN customers
ON (customers.id = natural_person.id_customers)