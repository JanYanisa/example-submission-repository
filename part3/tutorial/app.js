const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/notes', notesRouter)
app.use(middleware.unknownEndpoint)
// this has to be the last loaded middleware.
app.use(middleware.errorHandler)

module.exports = app