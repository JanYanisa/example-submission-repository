const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('./../app')
const Note = require('../models/note')

const api = supertest(app)

const initialNotes = [
  {
    content: 'HTML is easy',
    important: false,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  },
]

beforeEach(async () => {
  await Note.deleteMany({})
  let noteObject = new Note(initialNotes[0])
  await noteObject.save()
  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all notes are returned', async () => {
  const response = await api.get('/api/notes')

  expect(response.body).toHaveLength(initialNotes.length)
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map(r => r.content)
  expect(contents).toContain(
    'Browser can execute only JavaScript'
  )
})

afterAll(async () => {
  await mongoose.connection.close()
})

// runs the tests found in the tests/note_api.test.js file:
// npm test -- tests/note_api.test.js

//The -t option can be used for running tests with a specific name:
// npm test -- -t "a specific note is within the returned notes"

// refer to the name of the test or the describe block
// npm test -- -t 'notes'