const Controller = require('egg').Controller

/**
 * 系统用户控制层
 */
class UsersController extends Controller {
  async index() {
    const ctx = this.ctx
    const query = {
      limit: ctx.query.limit,
      offset: ctx.query.offset,
    }
    console.log('查询开始')
    ctx.body = await ctx.model.User.findAll(query)
    console.log('查询结束')
  }

  async show() {
    const ctx = this.ctx
    ctx.body = await ctx.model.User.findByPk(ctx.params.id)
  }

  async create() {
    const ctx = this.ctx
    const { name, age } = ctx.request.body
    const user = await ctx.model.User.create({ name, age })
    ctx.status = 201
    ctx.body = user
  }

  async update() {
    const ctx = this.ctx
    const id = ctx.params.id
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    const { name, age } = ctx.request.body
    await user.update({ name, age })
    ctx.body = user
  }

  async destroy() {
    const ctx = this.ctx
    const id = ctx.params.id
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    await user.destroy()
    ctx.status = 200
  }
}
module.exports = UsersController
