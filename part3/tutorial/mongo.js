//get const from .env
require('dotenv').config()
console.log('user', process.env.MONGO_USER)
console.log('password', process.env.MONGO_PASSWORD)

const mongoose = require('mongoose')

const url =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.viy334d.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

//https://www.geeksforgeeks.org/how-to-parse-command-line-arguments-in-node-js/
// How to parse command line arguments in node.js
const arg = process.argv.slice(2)
if (arg.length > 0) arg[1] = (/true/).test(arg[1])
console.log('arg', arg)

//for create new data into db
const note = new Note({
  content: arg[0] || 'HTML is Not that Easy',
  important: arg.length > 0 ? arg[1] : true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})

// fetching data from db
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})