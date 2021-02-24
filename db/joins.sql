SELECT users.user_id, posts.user_id
FROM  users
JOIN posts ON posts.user_id=users.user_id;

