SELECT users.user_id, posts.user_id
FROM  users
JOIN posts ON posts.user_id=users.user_id;

SELECT posts.post_id, training.train_id, posts.technique, posts.notes, 
technique.date_trained, technique.time_trained, technique.time_rolling
FROM posts 
JOIN training ON posts.post_id=training.train_id