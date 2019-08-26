//Configuraciones Globales
require('./config/config');
const port = process.env.PORT || 3000;

//Configuraciones de Express
const express = require('express');
const app = express();

//Configuraciones de MongoDB
const mongoose = require('mongoose');


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos Online')
});

app.listen(port, () => console.log('Escuchado puerto:', 3000));