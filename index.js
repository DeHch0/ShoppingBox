const db = require('./db');

db.then(() => {
    console.log('Connected to db successfully');

});

const express = require('express');
const config = require('./config');
const app = express();
const models = require('./models');


app.use(express.json());

app.get('/', (req, res) => {

    models.product.create({
        name: 'milk',
        price: 234,
    }).then(() => {
        res.send('Created !');
    }).catch((e) => {
        res.send('Problem !');

    })

});

app.listen(config.port, () => {
    console.log(`Server: Listening on ${config.port}`);
});