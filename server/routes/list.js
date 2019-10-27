const express = require('express')

const router = express()
const db = require('../db/db')
router.use(express.json())