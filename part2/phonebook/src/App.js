import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import serverCalls from "./services/serverCalls";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [listToShow, setListToShow] = useState(persons);

	useEffect(() => {
		serverCalls.getAll().then((personList) => {
			console.log(personList);
			setPersons(personList);
			setListToShow(persons);
		});
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons={persons} setListToShow={setListToShow} />
			<h2>Add a new</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setListToShow={setListToShow}
			/>
			<h2>Numbers</h2>
			<PersonList persons={listToShow} setPersons={setPersons} />
		</div>
	);
};

export default App;
