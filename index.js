const db = require('./db');

db.then(() => {
    console.log('Connected to db successfully');

});

const express = require('express');
const config = require('./config');
const app = express();

app.use(express.json());

require('./router')(app);

app.listen(config.port, () => {
    console.log(`Server: Listening on ${config.port}`);
});