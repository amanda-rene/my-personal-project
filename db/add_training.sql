INSERT INTO training (date_trained, time_trained, time_rolling, train_id)
VALUES ($1, $2, $3, $4)
RETURNING *;