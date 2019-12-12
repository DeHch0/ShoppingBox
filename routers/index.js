let productsRouter = require('./product');
let userRouter = require('./user');
let categoryRouter = require('./category');


module.exports = {
    productsRouter: productsRouter.productRouter,
    userRouter: userRouter.userRouter,
    categoryRouter: categoryRouter.categoryRouter,
}