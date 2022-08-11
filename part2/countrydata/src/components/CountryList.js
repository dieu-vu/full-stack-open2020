import React, {useState} from 'react';
import CountryDetails from './CountryDetails';
import SingleCountry from './SingleCountry';

const CountryList = ({countries, listToShow}) => {
    if (countries.length === listToShow.length) {
        return listToShow.map((c) => {
            return <SingleCountry key={c.name.common} c={c} />;
        });
    } else if (listToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (listToShow.length < 10 && listToShow.length > 1) {
        return listToShow.map((c) => (
            <SingleCountry key={c.name.common} c={c} />
        ));
    } else if (listToShow.length === 1) {
        console.log('only one country', listToShow[0]);
        return <CountryDetails country={listToShow[0]} />;
    } else {
        return <></>;
    }
};

export default CountryList;
