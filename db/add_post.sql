INSERT INTO posts (technique, notes)
VALUES ($1, $2)
RETURNING *;