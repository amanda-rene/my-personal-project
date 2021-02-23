UPDATE training
SET date_trained = $1, time_trained = $2, time_rolling = $3
WHERE train_id = $4