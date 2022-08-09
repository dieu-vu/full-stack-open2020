import React from 'react'
const PersonList = ({persons}) => {
    return (
      persons.map((p) => <li key={p.id}>{p.name} {p.number}</li>)
    )
}
  
export default PersonList;