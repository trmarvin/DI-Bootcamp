-- -- Database: lendinglibrary

-- -- DROP DATABASE IF EXISTS lendinglibrary;

-- CREATE DATABASE lendinglibrary
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE customer (
--   id         SERIAL PRIMARY KEY,
--   first_name VARCHAR(50),
--   last_name  VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE customer_profile (
--   id           SERIAL PRIMARY KEY,
--   isLoggedIn   BOOLEAN NOT NULL DEFAULT false,
--   customer_id  INTEGER NOT NULL UNIQUE
-- );

-- INSERT INTO customer (first_name, last_name)
-- 	VALUES 
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lau'),
-- 	('Lea', 'Rive');

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES 
--   (
--     TRUE,
--     (SELECT id FROM customer WHERE first_name = 'John'   AND last_name = 'Doe')
--   ),
--   (
--     FALSE,
--     (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lau')
--   );

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

-- SELECT c.first_name 
-- FROM customer AS c
-- INNER JOIN customer_profile AS cp
-- 	ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = TRUE;

-- All the customers first_name and isLoggedIn columns - 
-- even the customers those who don’t have a profile.

-- SELECT c.first_name, cp.isLoggedIn
-- FROM customer AS c
-- LEFT JOIN customer_profile AS cp
--   ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn

-- SELECT COUNT(*) AS not_logged_in
-- FROM customer AS c
-- LEFT JOIN customer_profile AS cp
--   ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn IS FALSE
--    OR cp.isLoggedIn IS NULL;

-- *** Part II: ****

-- Create a table named Book, with the columns: 
-- book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL,
-- 	author VARCHAR(75) NOT NULL
-- );

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- INSERT INTO book (title, author)
-- 	VALUES
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee');

-- Create a table named Student, with the columns: 
-- student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
-- Make sure that the age is never bigger than 15 
-- (Find an SQL method);

-- CREATE TABLE student (
--   student_id SERIAL PRIMARY KEY,
--   name       VARCHAR(100) NOT NULL UNIQUE,
--   age        SMALLINT CHECK (age <= 15)
-- );

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

-- INSERT INTO student (name, age)
-- 	VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date

-- This table, is a junction table for a Many to Many relationship with the Book and Student tables: 
-- A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- CREATE TABLE Library (
--     library_id    SERIAL PRIMARY KEY,
--     book_fk_id    INTEGER NOT NULL,
--     student_fk_id INTEGER NOT NULL,
--     borrowed_date DATE NOT NULL DEFAULT CURRENT_DATE,

--     FOREIGN KEY (book_fk_id) 
--         REFERENCES book(book_id) 
--         ON DELETE CASCADE 
--         ON UPDATE CASCADE,

--     FOREIGN KEY (student_fk_id) 
--         REFERENCES student(student_id) 
--         ON DELETE CASCADE 
--         ON UPDATE CASCADE
-- );

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'John'),
--     '2022-02-15'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-08-12'
-- );

-- Display the data

-- SELECT 
--     s.name       AS student_name,
--     b.title      AS book_title,
--     l.borrowed_date
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b    ON l.book_fk_id    = b.book_id;

-- Select all the columns from the junction table

-- SELECT * FROM library

-- Select the name of the student and the title of the borrowed 
-- books

-- SELECT 
--     s.name  AS student_name,
--     b.title AS book_title
-- FROM library l
-- JOIN student s ON l.student_fk_id = s.student_id
-- JOIN book b    ON l.book_fk_id    = b.book_id;

-- Select the average age of the children, that borrowed the book 
-- Alice in Wonderland

-- SELECT 
--     AVG(s.age) AS average_age
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN book b    ON l.book_fk_id    = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table, what happened in the 
-- junction table ?

-- DELETE FROM student
-- WHERE student_id = 3;

SELECT * FROM library