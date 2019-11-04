const path = require('path')
const express = require('express')

const server = express()

const listRoutes = require('./routes/list')
const taskRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/list', listRoutes)
server.use('/api/v1/tasks', taskRoutes)

module.exports = server
