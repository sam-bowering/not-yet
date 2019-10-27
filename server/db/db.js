const connection = require('./connection')

function getList (db = connection) {
  return db('list')
}

module.exports = {
  getList
}