require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const {SESSION_SECRET, CONNECTION_STRING} = process.env
const SERVER_PORT = 4000

const app = express();

const auth = require('./Controllers/userController')
const ctrl = require('./Controllers/posts')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge: 1000 * 60 * 60 *60
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to DB!')
})
// Auth Endpoints
app.post('/api/register', auth.register);
app.post('/api/login', auth.login);
app.post('/api/logout', auth.logout);
app.get('/api/home', auth.userSession);

// Post and Training Endpoints
app.post('/api/add/post', ctrl.addPost);
app.delete('/api/post/remove/:id', ctrl.deletePost);
app.put('/api/post/:post_id', ctrl.editPost);
app.get('/api/post/', ctrl.readPost);

app.post('/api/add/training', ctrl.addTraining);
app.delete('/api/post/remove/:id', ctrl.deleteTraining);
app.put('/api/post/:post_id', ctrl.editTraining);



app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))