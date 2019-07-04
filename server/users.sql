CREATE DATABASE property_pro;

CREATE TABLE users(

    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    phone_number VARCHAR NOT NULL,
    is_admin BOOLEAN NOT NULL UNIQUE DEFAULT FALSE
);

-- 





-- SELECT
--dont do this
--you might fetch too much data
-- you might fetch confidential data
SELECT * from USERS
-- alternative

--good
--1. you limit what you want and think about its usefulness
SELECT guid, isActive, balance, age, eyecolor from users;
