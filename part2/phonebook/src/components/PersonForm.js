import React, { useState, useEffect } from "react";
import serverCalls from "../services/serverCalls";

const PersonForm = ({
	persons,
	setPersons,
	setListToShow,
	setAddSucceeded,
	setMessage,
	setDeleteSucceeded,
}) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
			id: persons.length + 1,
		};

		const existingPerson = persons.find((e) => e.name === newPerson.name);

		if (existingPerson) {
			if (
				window.confirm(
					`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				const changedPerson = { ...existingPerson, number: newNumber };
				serverCalls
					.update(changedPerson.id, changedPerson)
					.then((response) => {
						setPersons(
							persons.map((p) =>
								p.id !== changedPerson.id ? p : response
							)
						);
						setAddSucceeded(true);
						setDeleteSucceeded(false);
						setMessage(`Updated ${changedPerson.name}`);
					});
			} else {
				alert(`${newPerson.name} is already added to phonebook`);
			}
		} else {
			serverCalls.create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setAddSucceeded(true);
				setDeleteSucceeded(false);
				setMessage(`Added ${returnedPerson.name}`);
			});
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
