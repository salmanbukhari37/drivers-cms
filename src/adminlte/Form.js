import React from 'react';
import Date from './Form/Date';

import { Form as StrapForm } from 'reactstrap';
import Checkbox from './Form/Checkbox';
import Time from './Form/Time';
import Input from './Form/Input';
import ButtonSpinner from './Form/ButtonSpinner';

const Form = (props) => {
    return(
        <StrapForm>
            { props.children }
        </StrapForm>
    );
}

Form.Date = Date;
Form.Time = Time;
Form.Input = Input;
Form.ButtonSpinner = ButtonSpinner;
Form.Checkbox = Checkbox;
export default Form;