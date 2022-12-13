import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall'

const Modalef = (main) => {
    
    return (
    <div>
        {console.log(main.main)}
        {main.main === "Snow" ? <Snowfall /> : null}
    </div>
  );
};

export default Modalef;