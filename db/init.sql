CREATE TABLE users
(
	user_id SERIAL PRIMARY KEY,
    email VARCHAR (50) NOT NULL,
	username VARCHAR(25) NOT NULL,
	password VARCHAR(500) NOT NULL,
);

CREATE TABLE posts
(
	post_id SERIAL PRIMARY KEY,
	technique VARCHAR (50),
	notes VARCHAR (500),
	user_id INT REFERENCES users(user_id)
);



CREATE TABLE training
(
	train_id SERIAL PRIMARY KEY,
	date_trained DATE,
	time_trained INT,
	time_rolling INT,
    post_id INT REFERENCES posts(post_id)
);
