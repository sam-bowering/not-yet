const connection = require('../connection')

function getTasksByGoalId (goalId, db = connection) {
  return db('tasks')
    .where('goal_id', goalId)
}

module.exports = {
  getTasksByGoalId
}
