INSERT INTO posts (technique, notes, user_id)
VALUES ($1, $2, $3)
RETURNING *;