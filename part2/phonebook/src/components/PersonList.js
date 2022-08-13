import React, { useEffect } from "react";
import SinglePerson from "./SinglePerson";

const PersonList = ({
	persons,
	setPersons,
	setDeleteSucceeded,
	setMessage,
	setAddSucceeded,
}) => {
	return persons.map((p) => (
		<SinglePerson
			key={p.id}
			person={p}
			persons={persons}
			setPersons={setPersons}
			setDeleteSucceeded={setDeleteSucceeded}
			setMessage={setMessage}
			setAddSucceeded={setAddSucceeded}
		/>
	));
};

export default PersonList;
