DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100),
    -- date date DEFAULT GETDATE(),
    pseudonym VARCHAR(50),
    body VARCHAR(600)
);

