const connection = require('../connection')

function getList (db = connection) {
  return db('list')
}

function addGoal (gName, gDesc, gComp, gPrim, gDepen, db = connection) {
  return db('list')
    .insert({ name: gName, description: gDesc, completed: gComp, primary: gPrim, dependants: gDepen })
}

function getGoalByName (name, db = connection) {
  return db('list')
    .where('name', name)
    .first()
}

function getGoalById (id, db = connection) {
  return db('list')
    .where('id', id)
    .first()
}

function deleteGoalById (id, db = connection) {
  return db('list')
    .where('id', id)
    .del()
}

module.exports = {
  getList,
  addGoal,
  getGoalByName,
  getGoalById,
  deleteGoalById
}