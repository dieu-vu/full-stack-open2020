import React, {useState} from 'react'

const Filter = ({ persons, setListToShow }) => {
    const [searchString, setSearchString] = useState('')

    const filterByName = (searchString) => {
        console.log("filter function", searchString);
        if (searchString){
            var filterResult = persons.filter(p => p.name.toLowerCase().includes(searchString.trim().toLowerCase()))
            console.log("filter result", filterResult)
            setListToShow(filterResult);
        }
      }
    return (
        <>
        <form>
            <div>
            <label> filter shown with </label>
            <input value={searchString}
                onChange={(e) =>
                {
                console.log(e.target.value)
                setSearchString(e.target.value)
                console.log("searchString is now", searchString)
                filterByName(searchString);
                }}></input>
            </div>
      </form>
        </>
    )
}

export default Filter;