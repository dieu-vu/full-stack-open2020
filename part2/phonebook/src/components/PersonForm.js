import React, { useState, useEffect } from "react";
import serverCalls from "../services/serverCalls";

const PersonForm = ({ persons, setPersons, setListToShow }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
			id: persons.length + 1,
		};
		if (!persons.find((e) => e.name === newPerson.name)) {
			serverCalls.create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
			});
		} else {
			alert(`${newPerson.name} is already added to phonebook`);
		}
		setNewName("");
		setNewNumber("");
	};

	useEffect(() => {
		setListToShow(persons);
	}, [persons]);

	return (
		<>
			<form>
				<div>
					name:{" "}
					<input
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
					/>
				</div>
				<div>
					number:{" "}
					<input
						value={newNumber}
						onChange={(e) => setNewNumber(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit" onClick={handleSubmit}>
						add
					</button>
				</div>
			</form>
		</>
	);
};

export default PersonForm;
