import React, { useState, useEffect } from "react";
import serverCalls from "../services/serverCalls";
const SinglePerson = ({ person, persons, setPersons }) => {
	const [personDeleted, setPersonDeleted] = useState(false);

	const handleDeletePerson = () => {
		if (window.confirm(`Delete ${person.name}`)) {
			serverCalls.remove(person.id).then((response) => {
				console.log("removed person", person.id);
				setPersons(persons.filter((p) => p.id !== person.id));
				console.log("person List", persons);
				setPersonDeleted(true);
			});
		}
	};

	useEffect(() => {
		console.log("person List", persons);
		console.log("rerender");
	}, [persons]);

	return !personDeleted ? (
		<p key={person.id}>
			{person.name} {person.number}
			<span key={person.id}>
				<button key={person.id} onClick={handleDeletePerson}>
					delete
				</button>
			</span>
		</p>
	) : (
		<></>
	);
};

export default SinglePerson;
