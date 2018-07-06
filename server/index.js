const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

require('dotenv').config();
const port = 3020;
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('Database reporting for duty')
    app.set('db', db)
}).catch(error => console.log('Oi! You\'ve an error!', error))

app.listen(port, () => console.log(`I hear you on ${port}`));