/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638426120814_6019'

  // add your middleware config here
  config.middleware = []

  // 配置数据库链接
  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.3.65',
    port: 3306,
    database: 'score',
    username: 'root',
    password: '123456',
    // dialectOptions: {
    //   socketPath: '/var/run/mysqld/mysqld.sock', // 指定套接字文件路径
    // },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
