const Service = require('egg').Service

/**
 * 登录业务层
 */
class LoginService extends Service {
  constructor(ctx) {
    super(ctx)
  }

  async toLogin(params) {
    console.log('开始登陆')
  }
}

module.exports = LoginService
