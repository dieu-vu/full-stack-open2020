import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import serverCalls from "./services/serverCalls";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [listToShow, setListToShow] = useState(persons);
	const [addSucceeded, setAddSucceeded] = useState(false);
	const [deleteSucceeded, setDeleteSucceeded] = useState(false);
	const [message, setMessage] = useState("");

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
			{addSucceeded ? (
				<Notification message={message} color={"green"} />
			) : (
				<></>
			)}
			{deleteSucceeded ? (
				<Notification message={message} color={"red"} />
			) : (
				<></>
			)}
			<Filter persons={persons} setListToShow={setListToShow} />
			<h2>Add a new</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setListToShow={setListToShow}
				setAddSucceeded={setAddSucceeded}
				setMessage={setMessage}
				setDeleteSucceeded={setDeleteSucceeded}
			/>
			<h2>Numbers</h2>
			<PersonList
				persons={listToShow}
				setPersons={setPersons}
				setDeleteSucceeded={setDeleteSucceeded}
				setMessage={setMessage}
				setAddSucceeded={setAddSucceeded}
			/>
		</div>
	);
};

export default App;
