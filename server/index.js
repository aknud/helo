require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
const app = express();

app.use(bodyParser.json());

let {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

massive(CONNECTION_STRING).then(db => {
    console.log('Database reporting for duty')
    app.set('db', db)
}).catch(error => console.log('Oi! You\'ve an error!', error))

app.post('/api/auth/register', ctrl.create)



app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:3000')
})

app.listen(SERVER_PORT, () => console.log(`I hear you on ${SERVER_PORT}`));