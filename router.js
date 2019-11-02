const express = require('express');
const routers = require('./routers');


module.exports = (app) => {

    app.use('/products', routers.productsRouter);
}