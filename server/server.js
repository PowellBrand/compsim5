require ('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, port = 4020
, app = express()
, controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
}).catch(console.error);

const db = app.get('db');

//endpoints

app.listen(port, ()=>{
    console.log(`I'm here on port: ${port}`)
})