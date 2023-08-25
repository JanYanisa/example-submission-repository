import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons.service'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setfilterName] = useState('')
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const personsToShow = filterName === ''
    ? persons
    : persons.filter(persons => persons.name.toLowerCase().includes(filterName))

  const handlNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handlfilterNameChange = (event) => {
    setfilterName(event.target.value)
  }
  const addNewPerson = (event) => {
    event.preventDefault()
    const sameNameIndex = persons.findIndex(person => person.name === newName)
    if (sameNameIndex === -1 ) {
      const newNameObject = {
        name: newName,
        number: newNumber,
      }
      personsService
        .create(newNameObject)
        .then((res) => {
          setPersons(persons.concat(res))
          setNewName('')
          setNewNumber('')
          setMsg({type : 'success', msg:`Added ${res.name}`})
          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
          const changedName = {...persons[sameNameIndex], number: newNumber}
          personsService
            .update(changedName.id, changedName)
            .then(res => {
              console.log('replace res',res)
              let currentPersons = []
              persons.forEach((person, i) => {
                if (person.id === res.id) {
                  currentPersons.push(res)
                } else {
                  currentPersons.push(person)
                }
              })
              setPersons(currentPersons)
              setNewName('')
              setNewNumber('')
              setMsg({type : 'success', msg:`Added new number ${res.number} to ${res.name}`})
              setTimeout(() => {
                setMsg(null)
              }, 5000)
            })
            .catch(err => {
              console.log(err)
              setMsg({type : 'error', msg:`Added new number error`})
              setTimeout(() => {
                setMsg(null)
              }, 5000)
            })
        }
    }
  }
  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
        console.log('delete!!', name, id)
        personsService
          .deleteById(id)
          .then( (res) => {
            console.log('deleteByID res', res)
            setPersons(persons.filter(person => person.id !== id))
            setMsg({type : 'success', msg:`Removed ${name}`})
              setTimeout(() => {
                setMsg(null)
              }, 5000)
        })
        .catch(err => {
          setMsg({type : 'error', msg:`Information of ${name} has already been removed from server`})
          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
        
    }
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={msg} />
      <Filter filterName={filterName} handlfilterNameChange={handlfilterNameChange}/>
      <h3>Add a new</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} handlNewNameChange={handlNewNameChange} newNumber={newNumber} handlNewNumberChange={handlNewNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deletePersonFn={deletePerson}/>
    </div>
  )
}

export default App

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className = {`notification ${message.type}`}>
      {message.msg}
    </div>
  )
}