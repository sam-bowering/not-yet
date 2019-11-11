const express = require('express')

const router = express()

const db = require('../db/functions/tasks.db')

router.use(express.json())

router.get('/goal/:goalId', (req, res) => {
  const id = Number(req.params.goalId)

  db.getTasksByGoalId(id)
    .then(tasks => res.json(tasks))
})

router.post('/goal', (req, res) => {
  const { title, description, goalId } = req.body
  const completed = 0

  db.addTask(title, description, completed, goalId)
    .then(task => res.json(task))
})

router.delete('/goal/:taskId', (req, res) => {
  const { id, goalId } = req.body

  db.deleteTaskById(id)
    .then(db.getTasksByGoalId(goalId)
      .then(tasks => res.json(tasks)))
})

module.exports = router
