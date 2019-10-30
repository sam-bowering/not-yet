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
    .then(res.sendStatus(200))
})

module.exports = router