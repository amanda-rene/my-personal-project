SELECT posts.post_id, training.train_id, posts.technique, posts.notes, 
training.date_trained, training.time_trained, training.time_rolling
FROM posts 
JOIN training ON posts.post_id=training.post_id
WHERE training.train_id = $1;

