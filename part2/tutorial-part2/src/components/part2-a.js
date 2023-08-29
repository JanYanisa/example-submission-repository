import Note from './Note'
import { useState, useEffect, useRef } from 'react'
import notesService from '../services/notes.service'
import loginService from '../services/login.service'
import LoginForm from './LoginForm'
import Togglable from './Togglable'
import NoteForm from './NoteForm'
const Part2a = () => {
  const [notes, setNotes] = useState(null)
  const [showAll, setShowAll] = useState(true)
  // const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  const hook = () => {
    notesService
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }
  useEffect(hook, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      notesService.setToken(user.token)
    }
  }, [])

  const noteFormRef = useRef()
  if (!notes) {
    return null
  }
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility()
    notesService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response))
      })
      .catch(err => {
        // console.log(err.response.data.error)
        const errMsg = err.response.data.error
        if (errMsg.includes('token expired')) {
          setErrorMessage(`${errMsg}, try log in again`)
          logOut()
        } else {
          setErrorMessage(errMsg)
        }
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
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
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  const handleLogin = async (userObject) => {
    try {
      const user = await loginService.login(userObject)
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      notesService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    notesService.setToken(null)
    setUser(null)
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {user === null ?
        <div>
          <Togglable buttonLabel="log in">
            <LoginForm handleLoginFn={handleLogin}/>
          </Togglable>
        </div>
        : <div>
          <p>{user.name} logged in</p>
          <button onClick={() => logOut()}>
              log-out
          </button>
          <Togglable buttonLabel="new note" ref={noteFormRef}>
            <NoteForm createNote={addNote}/>
          </Togglable>
        </div>
      }
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
      <Footer />
    </div>
  )
}

export default Part2a

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
    </div>
  )
}