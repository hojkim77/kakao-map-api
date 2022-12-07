import React, { useEffect, useState } from 'react'
import axios from "axios";

const API_KEY = "e862b7b1a840ae3919413a67d1fa2be9";

const Weather = ({ center, end }) => {
    const [weather, setWeather] = useState("");

    const lat = center.Ma;
    const lon = center.La;
    useEffect(() => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    axios.get(url)
        .then((responseData) => {
            const data = responseData.data;
            setWeather({
            temperature: data.main.temp,
            main: data.weather[0].main,
            loading: false,
            });
        });
    },[center])
    return(
        <div>
            <div>
                <h1>{weather.temperature}</h1>
            </div>
        </div>
    )
    
}

export default Weather