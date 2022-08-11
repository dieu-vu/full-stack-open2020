import React from 'react';

const CountryDetails = ({country}) => {
    console.log('api lang', country.languages);
    const entries = Object.entries(country.languages);

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <strong>languages: </strong>
            <ul>
                {entries.map(([key, val]) => (
                    <li key={key}>{val}</li>
                ))}
            </ul>
            <img style={{height: 100}} src={encodeURI(country.flags.png)}></img>
        </>
    );
};

export default CountryDetails;
