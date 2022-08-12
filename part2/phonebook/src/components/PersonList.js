import React, { useEffect } from "react";
import SinglePerson from "./SinglePerson";

const PersonList = ({ persons, setPersons }) => {
	return persons.map((p) => (
		<SinglePerson
			key={p.id}
			person={p}
			persons={persons}
			setPersons={setPersons}
		/>
	));
};

export default PersonList;
