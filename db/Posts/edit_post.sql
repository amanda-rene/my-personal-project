UPDATE posts
SET technique = $1, notes = $2, date_trained $4
WHERE post_id = $5
RETURNING *;