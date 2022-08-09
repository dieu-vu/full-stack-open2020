import { useState } from 'react'
import PersonList from './components/PersonList';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')
  const [listToShow, setListToShow] = useState(persons)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (!persons.find(e => e.name === newPerson.name)) {
      setPersons(persons.concat(newPerson));
      setNewName('');
    } else {
      alert(`${newPerson.name} is already added to phonebook`);
    }
  }

  const filterByName = (searchString) => {
    console.log("filter function", searchString);
    if (searchString){
        var filterResult = persons.filter(p => p.name.toLowerCase().includes(searchString.toLowerCase()))
        console.log("filter result", filterResult)
        setListToShow(filterResult);
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label> filter shown with </label>
          <input value={searchString}
            onChange={(e) =>
            {
              console.log(e.target.value)
              setSearchString(e.target.value)
              console.log("searchString is now", searchString)
              filterByName(searchString);
          }}></input>
        </div>
      </form>
      <h2>Add a new</h2>
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
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <PersonList persons={listToShow}/>
    </div>
  )
}

export default App
