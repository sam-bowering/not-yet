const connection = require('../connection')

function getTasksByGoalId (goalId, db = connection) {
  return db('tasks')
    .where('goal_id', goalId)
}

function addTask (title, description, completed, goalId, db = connection) {
  return db('tasks')
    .where('goal_id', goalId)
    .insert({ name: title, description, completed, goal_id: goalId })
}

function deleteTaskById (id, db = connection) {
  return db('tasks')
    .where('tasks.id', id)
    .del()
}

module.exports = {
  getTasksByGoalId,
  addTask,
  deleteTaskById
}
