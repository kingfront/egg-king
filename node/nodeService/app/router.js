'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/login', controller.loginController.login)
  router.get('/users/create', controller.usersController.create)
  router.get('/users/index', controller.usersController.index)
}
