const connection = require('../connection')

function getList (db = connection) {
  return db('goals')
}

function addGoal (gName, gDesc, gComp, gPrim, gDepen, db = connection) {
  return db('goals')
    .insert({ name: gName, description: gDesc, completed: gComp, primary: gPrim, dependants: gDepen })
}

function getGoalByName (name, db = connection) {
  return db('goals')
    .where('name', name)
    .first()
}

function getGoalById (id, db = connection) {
  return db('goals')
    .where('id', id)
    .first()
}

function deleteGoalById (id, db = connection) {
  return db('goals')
    .where('id', id)
    .del()
}

function completeGoalById (id, db = connection) {
  return db('goals')
    .where('id', id)
    .update({ completed: true })
}

function uncompleteGoalById (id, db = connection) {
  return db('goals')
    .where('id', id)
    .update({ completed: false })
}

function updateGoalDescription (desc, id, db = connection) {
  return db('goals')
    .where('id', id)
    .update({ description: desc })
}

module.exports = {
  getList,
  addGoal,
  getGoalByName,
  getGoalById,
  deleteGoalById,
  completeGoalById,
  uncompleteGoalById,
  updateGoalDescription
}
