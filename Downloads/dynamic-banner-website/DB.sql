CREATE DATABASE banner_db;

USE banner_db;

CREATE TABLE banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    timer INT,
    link VARCHAR(255),
    is_visible BOOLEAN DEFAULT TRUE
);

INSERT INTO banner (description, timer, link, is_visible) 
VALUES ('New description', 20, 'https://facebook.com', 1);
select * from banner;
