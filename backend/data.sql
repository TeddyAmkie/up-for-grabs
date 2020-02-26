CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    first_name text,
    last_name text,
    email text NOT NULL UNIQUE,
    photo_url TEXT
);

CREATE TABLE organization (
    id SERIAL PRIMARY KEY,
    dba text NOT NULL,
    org_type text NOT NULL,
    address text
);

CREATE TABLE roles (
    id serial PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    entity_id INTEGER NOT NULL REFERENCES organization (id) ON DELETE CASCADE,
    entity_type text NOT NULL
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