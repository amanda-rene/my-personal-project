require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();
const {SESSION_SECRET, CONNECTION_STRING} = process.env
const ctrl = require('./Controllers/userController')
const SERVER_PORT = 4000
const auth = require('./Controllers/userController')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge: 1000 * 60 * 60
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

app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
app.get('/auth/home', auth.userSession)

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))