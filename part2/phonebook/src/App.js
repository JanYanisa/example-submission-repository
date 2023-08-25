import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setfilterName] = useState('')

  const personsToShow = filterName === ''
    ? persons
    : persons.filter(persons => persons.name.includes(filterName))

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
  const handlfilterNameChange = (event) => {
    setfilterName(event.target.value)
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
      <Filter filterName={filterName} handlfilterNameChange={handlfilterNameChange}/>
      <h3>Add a new</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} handlNewNameChange={handlNewNameChange} newNumber={newNumber} handlNewNumberChange={handlNewNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App