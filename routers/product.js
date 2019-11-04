const productRouter = require('express').Router();
const controllers = require('../controllers');


productRouter.get('/', controllers.productController.get);
productRouter.get('/:id', controllers.productController.get);
productRouter.post('/', controllers.productController.create);
productRouter.put('/:id', controllers.productController.edit);
productRouter.delete('/:id', controllers.productController.remove);


module.exports = {
    productRouter,
}