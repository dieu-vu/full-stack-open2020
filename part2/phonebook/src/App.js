import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [listToShow, setListToShow] = useState(persons);

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data);
        setPersons(response.data);
        setListToShow(persons);
      })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setListToShow={setListToShow} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setListToShow={setListToShow} />
      <h2>Numbers</h2>
      <PersonList persons={listToShow}/>
    </div>
  )
}

export default App
