import React from 'react'
import noteReducer from '../reducers/noteReducer'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'


const Part6a = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state)
  const store2 = createStore(noteReducer)

  store2.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })

  store2.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    }
  })
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
          {store2.getState().map(note =>
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important' : ''}</strong>
            </li>
          )}
        </ul>
        <button
          onClick={e => store2.dispatch(action)}
        >
            TOGGLE_IMPORTANCE ID:2
        </button>
      </div>
    </>
  )
}

export default Part6a