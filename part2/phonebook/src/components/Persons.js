
const Persons = ({personsToShow, deletePersonFn}) => {
    // const deletePerson = (name, id) => {
    //     return deletePersonFn(name, id)
    // }
    return (
        <div>
            {personsToShow.map(person => (
                <p key={person.id}>
                    {person.name} {person.number} <button onClick={() => deletePersonFn(person.name, person.id)}>delete</button>
                </p>
            ))}
        </div>
    )
}
export default Persons