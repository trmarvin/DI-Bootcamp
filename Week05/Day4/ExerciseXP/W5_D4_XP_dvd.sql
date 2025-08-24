-- -- Database: dvdrental

-- -- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- SELECT * FROM customer

-- SELECT first_name || ' ' || last_name AS full_name 
-- FROM customer;

-- SELECT DISTINCT create_date FROM customer;

-- SELECT * FROM customer ORDER BY first_name DESC;

-- Write a query to get the film ID, title, description, 
-- year of release and rental rate in ascending order 
-- according to their rental rate.

-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC

-- Write a query to get the address, and the phone number 
-- of all customers living in the Texas district, these 
-- details can be found in the “address” table.

-- SELECT address, phone FROM address
-- WHERE district = 'Texas';

-- Write a query to retrieve all movie details where the 
-- movie id is either 15 or 150.

-- SELECT * from film
-- WHERE film_id = 15 OR film_id = 150;

-- Write a query which should check if your favorite movie
-- exists in the database. Have your query get the film 
-- ID, title, description, length and the rental rate, 
-- these details can be found in the “film” table.

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Inception';

-- No luck finding your movie? Maybe you made a mistake 
-- spelling the name. Write a query to get the film ID, 
-- title, description, length and the rental rate of all 
-- the movies starting with the two first letters of your 
-- favorite movie.

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'In%';

-- Write a query which will find the 10 cheapest movies.

-- SELECT title, rental_rate FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;

-- Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

-- SELECT title, rental_rate FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10
-- LIMIT 10;

-- Write a query which will join the data in the customer 
-- table and the payment table. You want to get the first 
-- name and last name from the customer table, as well 
-- as the amount and the date of every payment made by a 
-- customer, ordered by their id (from 1 to…).

-- SELECT
--   cust.customer_id,
--   cust.first_name,
--   cust.last_name,
--   pay.amount,
--   pay.payment_date
-- FROM customer AS cust
-- INNER JOIN payment AS pay
--   ON cust.customer_id = pay.customer_id
-- ORDER BY cust.customer_id ASC;

-- You need to check your inventory. Write a query to get 
-- all the movies which are not in inventory.

-- SELECT film_id, title
-- FROM film
-- WHERE film_id NOT IN (
--     SELECT film_id
--     FROM inventory
-- );

-- Write a query to find which city is in which country.

SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id
ORDER BY country.country, city.city;