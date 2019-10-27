const path = require('path')
const express = require('express')

const server = express()

const listRoutes = require('./routes/list')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/list', listRoutes)

module.exports = server
