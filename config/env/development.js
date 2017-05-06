/**
 * Development environment settings
 */

module.exports = {

  models: {
    connection: 'someMysqlServer',
    migrate: 'alter'
  },

  port: 1337,

  bankApi: {
    baseURL: 'http://localhost:3000'
  }


};
