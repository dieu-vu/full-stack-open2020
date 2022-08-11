import React, {useEffect, useState} from 'react';
import axios from 'axios';

const WeatherInfo = ({country}) => {
    console.log('COUNTRY', country.name.common);
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    const apiKey = process.env.REACT_APP_API_KEY;
    const weatherUrl = `${baseUrl}lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}&units=metric`;
    const iconUrl = `http://openweathermap.org/img/wn/`;
    console.log('weather URL', weatherUrl);
    const [weatherInfo, setWeatherInfo] = useState(null);

    const getWeatherInfo = async () => {
        console.log('useEffect called');
        try {
            const response = await axios.get(weatherUrl);
            setWeatherInfo(response.data);
        } catch (e) {
            console.log('error', e);
        }
    };

    useEffect(() => {
        Promise.all(getWeatherInfo());
    }, [country]);
    console.log(weatherInfo);

    if (weatherInfo) {
        return (
            <>
                <h2> Weather in {country.capital}</h2>
                <p>temperature {weatherInfo.main.temp} Celcius</p>
                <img
                    src={encodeURI(
                        `${iconUrl}${weatherInfo.weather[0].icon}@2x.png`
                    )}
                    alt="condition"
                ></img>
                <p>wind {weatherInfo.wind.speed} m/s </p>
            </>
        );
    } else {
        return <p>no weather info</p>;
    }
};

export default WeatherInfo;
