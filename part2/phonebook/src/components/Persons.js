import personsService from "../services/persons.service"
const Persons = ({personsToShow, persons, setPersons}) => {
    const deletePerson = (name, id) => {
        if (window.confirm(`Delete ${name}?`)) {
            console.log('delete!!', name, id)
            personsService
            .deleteById(id)
            .then( (res) => {
                console.log('deleteByID res', res)
                setPersons(persons.filter(person => person.id !== id))
            })
        }
    }
    return (
        <div>
            {personsToShow.map(person => (
                <p key={person.id}>
                    {person.name} {person.number} <button onClick={() => deletePerson(person.name, person.id)}>delete</button>
                </p>
            ))}
        </div>
    )
}
export default Persons