import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall'
import Clouds from './Clouds';
import Sunshine from './Sunshine'
import ReactRain from 'react-rain-animation';

const Modalef = (main) => {
    
    return (
    <div>
        {main.main === "Snow" ? <Snowfall /> : 
         main.main === "Clouds"? <Clouds /> :
         main.main === "Clear" ? <Sunshine />:
         main.main === "Rain" ? <ReactRain />:
         null}
    </div>
    );
};

export default Modalef;