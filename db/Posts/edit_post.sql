UPDATE posts
SET technique = $1, notes = $2
WHERE post_id = $3
RETURNING *;