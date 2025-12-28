-- -- SELECT COUNT(*) AS total_actors
-- -- FROM actors;

-- -- SELECT * FROM actors

-- -- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- -- 	('Tom', 'Hanks', '1956-07-09');

-- -- 	result: 
-- -- ERROR:  syntax error at or near "'Tom'"
-- -- LINE 7:  ('Tom', 'Hanks', '1956-07-09');
-- --           ^ 

-- -- SQL state: 42601
-- -- Character: 149

-- INSERT INTO actors (first_name, last_name, number_oscars)
-- 	('Denzel', 'Washington', 2);

-- result:
-- ERROR:  syntax error at or near "'Denzel'"
-- LINE 18:  ('Denzel', 'Washington', 2);
--            ^ 

-- SQL state: 42601
-- Character: 403