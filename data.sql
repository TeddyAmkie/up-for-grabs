DROP DATABASE IF EXISTS 'up-for-grabs';
CREATE DATABASE 'up-for-grabs';
\c 'up-for-grabs'

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    account_type text NOT NULL,
    email text NOT NULL UNIQUE,
    photo_url TEXT
);