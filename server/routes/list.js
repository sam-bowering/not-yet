const express = require('express')
const router = express()

const db = require('../db/functions/list.db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getList()
    .then(list => {
      res.json(list)
    })
})

router.post('/create', (req, res) => {
  const { name, description, completed, primary, dependants } = req.body

  db.addGoal(name, description, completed, primary, dependants)
    .then(res.status(200))
    .then(db.getGoalByName(name)
      .then(goal => res.json({
        id: goal.id,
        name,
        description,
        completed: false,
        primary: true,
        dependants
      }))
    )
})

router.get('/goal/:selectedGoal', (req, res) => {
  const id = Number(req.params.selectedGoal)

  db.getGoalById(id)
    .then(goal => res.json(goal))
    .then(res.status(200))
})

router.delete('/goals', (req, res) => {
  const { id } = req.body

  db.deleteGoalById(id)
    .then(res.status(200))
    .then(db.getList()
      .then(list => res.json(list)))
})

router.put('/goals', (req, res) => {
  const { id } = req.body

  function checkCompletion (goal) {
    if (!goal.completed) {
      db.completeGoalById(id)
        .then(res.status(200))
        .then(db.getList()
          .then(list => res.json(list)))
    } else {
      db.uncompleteGoalById(id)
        .then(res.status(200))
        .then(db.getList()
          .then(list => res.json(list)))
    }
  }

  db.getGoalById(id)
    .then(goal => checkCompletion(goal))
})

module.exports = router
