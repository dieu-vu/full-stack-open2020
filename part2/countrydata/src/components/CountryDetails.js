import React from 'react';
import WeatherInfo from './WeatherInfo';

const CountryDetails = ({country}) => {
    console.log('api lang', country.languages);
    const entries = Object.entries(country.languages);

    return (
        <>
            <div style={{background: 'lightyellow'}}>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <strong>languages: </strong>
                <ul>
                    {entries.map(([key, val]) => (
                        <li key={key}>{val}</li>
                    ))}
                </ul>
                <img
                    style={{height: 100}}
                    src={encodeURI(country.flags.png)}
                    alt="flag"
                ></img>
                <WeatherInfo country={country} />
            </div>
        </>
    );
};

export default CountryDetails;
