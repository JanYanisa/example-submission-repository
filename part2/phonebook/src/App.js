import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handlNewNameChange = (event) => {
    const value = event.target.value
    setNewName(value)
    persons.every(person => {
      if (person.name === value) {
        alert(`${newName} is already added to phonebook`)
        return false
      }
      return true
    })
  }
  const handlNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addNewPerson = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newNameObject))
    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handlNewNameChange} placeholder="enter name" />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlNewNumberChange} placeholder="enter number"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App