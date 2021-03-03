INSERT INTO posts (technique, notes, date_trained, user_id)
VALUES ($1, $2, $3, $4)
RETURNING *;