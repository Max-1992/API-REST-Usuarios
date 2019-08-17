require('./config/config');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuarios', (req, res) => {
    res.json('get usuarios');
})

app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
})

app.post('/usuarios', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            message: 'No se recibio el nombre'
        })

    } else {

        res.json({
            body
        })

    }

})

app.delete('/usuarios', (req, res) => {
    res.json('delete usuarios');
})



app.listen(port, () => console.log('Escuchado puerto:', 3000));