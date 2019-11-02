const productRouter = require('express').Router();
const controllers = require('../controllers');


productRouter.get('/', controllers.productController.get);
productRouter.get('/:id', controllers.productController.get);
productRouter.delete('/:id', controllers.productController.remove);


module.exports = {
    productRouter,
}