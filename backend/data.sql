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

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    name text NOT NULL,
    image text NOT NULL,
    description text,
    quantity text,
    category text,
    location text NOT NULL,
    time_created timestamp
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    listing_id INTEGER NOT NULL REFERENCES listings (id) ON DELETE CASCADE,
    status TEXT NOT NULL
);

CREATE TABLE listing_windows (
    id SERIAL PRIMARY KEY,
    window_open text NOT NULL,
    window_close text NOT NULL,
    listings_id INTEGER NOT NULL REFERENCES listings (id) ON DELETE CASCADE
);