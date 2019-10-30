const connection = require('../connection')

function getList (db = connection) {
  return db('list')
}

function addGoal (gName, gDesc, gComp, gPrim, gDepen, db = connection) {
  return db('list')
    .insert({ name: gName, description: gDesc, completed: gComp, primary: gPrim, dependants: gDepen })
}

module.exports = {
  getList,
  addGoal
}