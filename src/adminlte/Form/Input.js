
import { Input as StrapInput } from 'reactstrap';
import { Field } from 'formik';

const Input = (props) => {
    <StrapInput
    { ...props }
    tag={Field}
    component='input'
    />
}

export default Input