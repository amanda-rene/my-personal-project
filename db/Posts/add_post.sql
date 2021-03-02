INSERT INTO posts (technique, notes, date_trained, time_training, time_rolling, user_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;