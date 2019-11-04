const express = require('express')

const router = express()

const db = require('../db/functions/tasks.db')

router.use(express.json())

router.get('/goal/:goalId', (req, res) => {
  const id = Number(req.params.goalId)

  db.getTasksByGoalId(id)
    .then(tasks => res.json(tasks))
})

module.exports = router
