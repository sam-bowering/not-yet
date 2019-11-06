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

module.exports = {
  getTasksByGoalId,
  addTask
}
