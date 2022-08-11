import React, {useEffect, useState} from 'react'

const Filter = ({ countries, setListToShow }) => {
    const [searchString, setSearchString] = useState('')


    const filterByName = (searchString) => {
        console.log("filter function", searchString);
        if (searchString){
            var filterResult = countries.filter(
                c => c.name.official.toLowerCase().includes(searchString.trim().toLowerCase()) ||
                c.name.common.toLowerCase().includes(searchString.trim().toLowerCase()))
            console.log("filter result", filterResult)
            setListToShow(filterResult);
        } else {
            setListToShow(countries);
        }
    }
    
    useEffect(() => {
        console.log(searchString)
        filterByName(searchString);
    }, [searchString]);
    
    return (
        <>
        <form>
            <div>
            <label> filter shown with </label>
            <input value={searchString}
                onChange={(e) =>
                {
                setSearchString(e.target.value)
                console.log(searchString)
                console.log("searchString is now", searchString)
                }}></input>
            </div>
      </form>
        </>
    ) 
}

export default Filter;
