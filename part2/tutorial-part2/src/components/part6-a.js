import React from 'react'
import noteReducer from '../reducers/noteReducer'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { useReducer } from 'react'


const Part6a = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state)
  const [notes, notesDispatch] = useReducer(noteReducer, [])
  const addAction1 = { type: 'NEW_NOTE',
    payload: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  }
  const addAction2 = {
    type: 'NEW_NOTE',
    payload: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    } }

  const action = {
    type: 'TOGGLE_IMPORTANCE',
    payload: {
      id: 2
    }
  }
  return (
    <>
      <div>
        <div>
          {counter}
        </div>
        <button
          onClick={e => dispatch({ type: 'INCREMENT' })}
        >
        plus
        </button>
        <button
          onClick={e => dispatch({ type: 'DECREMENT' })}
        >
        minus
        </button>
        <button
          onClick={e => dispatch({ type: 'ZERO' })}
        >
        zero
        </button>
      </div>
      <div>
        <ul>
          {notes.map(note =>
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important' : ''}</strong>
            </li>
          )}
        </ul>
        {notes.length < 1 && <button
          onClick={ () => notesDispatch(addAction1)}
        >
            NEW_NOTE ID:1
        </button>}
        {notes.length >= 1 && notes.length < 2 && <button
          onClick={ () => notesDispatch(addAction2)}
        >
            NEW_NOTE ID:2
        </button>}
        {notes.length >= 2 && <button
          onClick={ () => notesDispatch(action)}
        >
            TOGGLE_IMPORTANCE ID:2
        </button>}
      </div>
    </>
  )
}

export default Part6a