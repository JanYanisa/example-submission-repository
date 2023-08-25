const PersonForm = ({addNewPerson, newName, handlNewNameChange, newNumber, handlNewNumberChange}) => {
    return (
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
    )
}
export default PersonForm