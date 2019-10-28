const express = require('express')

const router = express()
const db = require('../db/db')
router.use(express.json())

router.get('/', (req, res) => {
  db.getList()
    .then(list => {
      res.json(list)
    })
})

module.exports = router