import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall'
import Clouds from './Clouds';

const Modalef = (main) => {
    
    return (
    <div>
        {main.main === "Snow" ? <Snowfall /> : 
         main.main === "Clouds"? <Clouds /> :
         null}
    </div>
    );
};

export default Modalef;