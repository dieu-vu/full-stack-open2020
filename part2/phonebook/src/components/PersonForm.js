import React, {useState} from 'react'

const PersonForm = ({ persons, setPersons, setListToShow}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }
        if (!persons.find(e => e.name === newPerson.name)) {
            setPersons(persons.concat(newPerson));
            setNewName('');
            setNewNumber('');
        } else {
          alert(`${newPerson.name} is already added to phonebook`);
        }
        setListToShow(persons);

    }

    return (
        <>
        <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
            </form>
        </>
    )
}

export default PersonForm;