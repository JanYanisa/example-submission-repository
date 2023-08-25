import Note from "./Note";
import { useState, useEffect } from 'react'
import notesService from '../services/notes.service'

const Part2a = () => {
  const initNewNote = 'a new note...'
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(initNewNote)
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    notesService
      .getAll()
      .then(response => {
          setNotes(response)
      })
  }
  useEffect(hook, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    notesService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response))
        setNewNote('')
      })
  }
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    notesService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(n => n.id !== id ? n : response))
      })
      .catch(error => {
        console.log('error toggleImportanceOf', error)
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} placeholder={initNewNote}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
  }
  
  export default Part2a;