'use strict'
const Controller = require('egg').Controller

const loginRule = {
  userName: 'string',
  password: 'string',
  authCode: { type: 'string', required: false },
}
/**
 * 登录控制层
 */
class LoginController extends Controller {
  async login() {
    const { ctx } = this
    ctx.validate(loginRule, ctx.request.body)
    ctx.service.loginService.toLogin(ctx.request.body)
    ctx.body = 'hi, login'
  }
}

module.exports = LoginController
