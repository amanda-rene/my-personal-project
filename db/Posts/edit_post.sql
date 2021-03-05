UPDATE posts
SET technique = $1, notes = $2, date_trained $3
WHERE post_id = $4
RETURNING *;