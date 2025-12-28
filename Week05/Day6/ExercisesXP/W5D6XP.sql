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

-- Get a list of all the languages, from the language table.

-- SELECT name 
-- FROM language

-- Get a list of all films joined with their languages – 
-- select the following details : film title, description,
-- and language name.

-- SELECT f.title, f.description, l.name
-- FROM film AS f
-- INNER JOIN language as l
-- ON f.language_id = l.language_id;

-- Get all languages, even if there are no films in those 
-- languages – select the following details : film title, 
-- description, and language name.

-- SELECT f.title, f.description, l.name
-- FROM language AS l
-- LEFT JOIN film as f
-- ON f.language_id = l.language_id
-- ORDER BY l.name;

-- Create a new table called new_film with the following 
-- columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50)
-- 	);

-- INSERT INTO new_film (name)
-- VALUES
-- 	('Inception'),
-- 	('Memento'),
-- 	('Interstellar');

-- Create a new table called customer_review, which will 
-- contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, 
-- its review should be automatically deleted.
-- It should have the following columns:
-- 		review_id – a primary key, non null, auto-increment.
--		film_id – references the new_film table. The film that is being reviewed.
--		language_id – references the language table. What language the review is in.
--		title – the title of the review.
-- 		score – the rating of the review (1-10).
--		review_text – the text of the review. No limit on the length.
--		last_update – when the review was last updated.

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
--     language_id INTEGER REFERENCES language(language_id),
--     title VARCHAR(150) NOT NULL,
--     score SMALLINT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Add 2 movie reviews. Make sure you link them to valid objects in
-- the other tables.

-- SELECT * FROM new_film

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
--  	(1, 1, 'My favorite movie!', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu justo arcu. Nam sit amet rhoncus diam, id malesuada quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae ante orci. Ut sollicitudin ut eros sed elementum. Praesent mauris urna, auctor in tristique eu, ultrices ac mi. Donec in lorem ligula. Cras vitae vehicula felis. Etiam quis efficitur dui, in sollicitudin neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam varius faucibus ante ut lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in cursus neque, sit amet vehicula nisi. Sed volutpat erat neque, at fermentum dui congue ac. Suspendisse rutrum non ex ac consequat. Sed vel ornare risus, sagittis eleifend tortor. Donec ultrices felis non dolor scelerisque, vel dignissim arcu pretium. Curabitur vel mi urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vestibulum elit et mi aliquam, quis mattis arcu pulvinar. Nullam lobortis augue lectus, et scelerisque orci finibus sit amet. Phasellus nisi urna, interdum sit amet vestibulum vel, iaculis ac sapien. Nullam commodo ullamcorper gravida. Fusce vel nisl nisl. Donec venenatis laoreet placerat. Mauris vestibulum massa nibh. Proin rhoncus odio nec metus finibus consequat. Vestibulum lobortis eros et luctus sodales. Proin eleifend, turpis non rutrum rhoncus, urna nulla imperdiet ligula, non semper est leo et urna. Praesent pharetra leo lorem, eget cursus elit lobortis at. Nulla ac lacinia lorem, et semper tellus. Donec leo lorem, egestas posuere lobortis in, tempus a lacus. Nulla id dolor odio. Nullam mattis leo in lobortis consectetur. Praesent commodo in odio a varius. Vivamus fermentum tincidunt nunc, nec vulputate dui egestas quis. Fusce neque lectus, maximus sed orci sed, sagittis vulputate magna. Donec vel suscipit nibh. Vestibulum consectetur gravida orci a iaculis. Curabitur gravida, turpis nec congue lacinia, eros nisi tincidunt elit, eget finibus tortor massa a neque. Aliquam a eros scelerisque, ultrices enim vitae, posuere augue. Curabitur semper leo at egestas elementum. Nam lacinia felis quis laoreet sollicitudin.'),	(2, 1, 'Great movie', 8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi eros, malesuada sed nisi non, porttitor consectetur leo. Quisque condimentum lacus et metus accumsan, in finibus nunc volutpat. Phasellus nec fermentum augue. Phasellus non ligula ut nisi bibendum iaculis quis at ligula. Ut maximus condimentum risus, at sodales metus pellentesque vel. Nunc aliquet magna ante, nec gravida enim facilisis ac. Praesent rutrum ante ante, at luctus velit tincidunt eget. Vivamus ullamcorper pretium ex, ut cursus neque sodales vitae. Cras lectus ipsum, malesuada et lorem in, suscipit vestibulum felis. Pellentesque scelerisque consectetur lorem sit amet interdum. Donec placerat, mauris et lacinia efficitur, sapien felis semper leo, nec cursus metus sem id urna.'),
-- 	(2, 1, 'Great movie', 8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi eros, malesuada sed nisi non, porttitor consectetur leo. Quisque condimentum lacus et metus accumsan, in finibus nunc volutpat. Phasellus nec fermentum augue. Phasellus non ligula ut nisi bibendum iaculis quis at ligula. Ut maximus condimentum risus, at sodales metus pellentesque vel. Nunc aliquet magna ante, nec gravida enim facilisis ac. Praesent rutrum ante ante, at luctus velit tincidunt eget. Vivamus ullamcorper pretium ex, ut cursus neque sodales vitae. Cras lectus ipsum, malesuada et lorem in, suscipit vestibulum felis. Pellentesque scelerisque consectetur lorem sit amet interdum. Donec placerat, mauris et lacinia efficitur, sapien felis semper leo, nec cursus metus sem id urna.');

-- Delete a film that has a review from the new_film table, 
-- what happens to the customer_review table?

-- DELETE FROM new_film
-- WHERE id = 2;

-- SELECT * FROM new_film;

-- *** EXERCISE 2 ***

--Use UPDATE to change the language of some films. 
--Make sure that you use valid languages.

-- UPDATE film
-- SET language_id = 1
-- WHERE id = 2;

-- Which foreign keys (references) are defined for the customer 
-- table? How does this affect the way in which we INSERT into 
-- the customer table?

-- You cannot insert a new customer unless the store_id you 
-- provide already exists in the store table.

-- You cannot insert a new customer unless the address_id you 
-- provide already exists in the address table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review;

-- Find out how many rentals are still outstanding 
-- (ie. have not been returned to the store yet).

-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding 
-- (ie. have not been returned to the store yet)

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their 
-- names. Can you help him find which movies he wants to rent?

-- 		The 1st film : The film is about a sumo wrestler, and one 
--		of the actors is Penelope Monroe.

-- SELECT f.film_id, f.title
-- FROM film AS f
-- JOIN film_actor AS fa ON fa.film_id = f.film_id
-- JOIN actor AS a       ON a.actor_id = fa.actor_id
-- WHERE a.first_name = 'Penelope'
--   AND a.last_name  = 'Monroe'
--   AND f.description ILIKE '%sumo%';

-- 		The 2nd film : A short documentary (less than 1 hour long), 
--		rated “R”.

-- SELECT f.film_id, f.title
-- FROM film AS f
-- JOIN film_category AS fc ON fc.film_id = f.film_id
-- JOIN category AS c       ON c.category_id = fc.category_id
-- WHERE c.name = 'Documentary'
--   AND f.length < 60
--   AND f.rating = 'R';

-- 		The 3rd film : A film that his friend Matthew Mahan rented.
--		He paid over $4.00 for the rental, and he returned it 
--		between the 28th of July and the 1st of August, 2005.

-- SELECT DISTINCT f.film_id, f.title
-- FROM customer  AS cu
-- JOIN rental    AS r  ON r.customer_id   = cu.customer_id
-- JOIN payment   AS p  ON p.rental_id     = r.rental_id
-- JOIN inventory AS i  ON i.inventory_id  = r.inventory_id
-- JOIN film      AS f  ON f.film_id       = i.film_id
-- WHERE cu.first_name = 'Matthew'
--   AND cu.last_name  = 'Mahan'
--   AND p.amount > 4.00
--   AND r.return_date >= DATE '2005-07-28'
--   AND r.return_date <  DATE '2005-08-02';

-- 		The 4th film : His friend Matthew Mahan watched this film,
--		as well. It had the word “boat” in the title or description
--		, and it looked like it was a very expensive DVD to 
--		replace.

SELECT f.film_id, f.title, f.replacement_cost
FROM customer  AS cu
JOIN rental    AS r  ON r.customer_id   = cu.customer_id
JOIN inventory AS i  ON i.inventory_id  = r.inventory_id
JOIN film      AS f  ON f.film_id       = i.film_id
WHERE cu.first_name = 'Matthew'
  AND cu.last_name  = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC, f.title;