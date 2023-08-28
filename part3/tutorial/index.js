const config = require('./utils/config')
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

const PORT = process.env.PORT || config.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})