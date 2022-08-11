import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';



const App = () => {
  const [countries, setCountries] = useState([]);
  const [listToShow, setListToShow] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
        setListToShow(response.data);
      })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter countries={countries} setListToShow={setListToShow} />
      <p>{listToShow.length}</p>
      
      <CountryList countries={countries} listToShow={listToShow} />
      
      </div>
  )
}

export default App
