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

module.exports = router