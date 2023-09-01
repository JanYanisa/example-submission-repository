const noteReducer = (state = [], action) => {
  console.log('state', state)
  switch(action.type) {
  case 'NEW_NOTE':
    return [...state, action.payload]
  case 'TOGGLE_IMPORTANCE': {
    const id = action.payload.id
    const noteToChange = state.find(n => n.id === id)
    const changedNote = {
      ...noteToChange,
      important: !noteToChange.important
    }
    return state.map(note =>
      note.id !== id ? note : changedNote
    )
  }
  default:
    return state
  }
}
export default noteReducer