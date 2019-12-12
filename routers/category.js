const categoryRouter = require('express').Router();
const controllers = require('../controllers');


categoryRouter.get('/', controllers.categoryController.get);
categoryRouter.post('/', controllers.categoryController.create);
categoryRouter.put('/:id', controllers.categoryController.edit);
categoryRouter.delete('/:id', controllers.categoryController.remove);
// categoryRouter.get('/:id', controllers.categoryController.getOne);


module.exports = {
    categoryRouter,
}