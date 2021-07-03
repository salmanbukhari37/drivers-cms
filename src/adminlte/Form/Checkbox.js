import React from 'react';
import { Input } from 'reactstrap';

const Checkbox = (props) => {
    return(
        <Input type="checkbox" className="custom-control-input" {...props} />
    );
}

export default Checkbox;