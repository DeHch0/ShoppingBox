const userRouter = require('express').Router();
const controllers = require('../controllers');

userRouter.get('/:token' , controllers.userController.isAdmin)
userRouter.post('/login', controllers.userController.login);
userRouter.post('/register', controllers.userController.register);
userRouter.post('/logout', controllers.userController.logout);
// userRouter.post('auth/:token' , controllers.userController.isLogged);


module.exports = {
    userRouter,
}