import React from 'react';
import { Input } from "reactstrap";

const Time = (props) => {
    return( 
        <Input type="time" {...props} />
    );  
}

export default Time;