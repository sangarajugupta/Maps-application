CREATE DATABASE pernmap

CREATE TABLE  maps(
    maps_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    state VARCHAR(255),
    lat float(25),
    lon float(25)
)