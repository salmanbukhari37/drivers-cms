import React from 'react';
import { Input } from 'reactstrap';

const Date = (props) => {
    return(
        <div className="input-group">
            <Input type="date" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask="" inputmode="numeric" {...props} />
        </div>
    );
}

export default Date;