CREATE DATABASE notes_app;

USE notes_app;

CREATE TABLE
    notes (
        id INTGER PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        contents TEXT NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT NOW ()
    );

INSERT INTO
    notes (title, contents)
VALUES
    ('Note 1', 'This is note 1'),
    ('Note 2', 'This is note 2'),
    ('Note 3', 'This is note 3')