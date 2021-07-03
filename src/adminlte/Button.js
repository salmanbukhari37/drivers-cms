// Default Admin LTE buttons

import { Button as StrapButton } from 'reactstrap';

const Spinner = (props) => {
    let { isSubmitting, text, spinningText } = props;
    return(
        <Button { ...props }>
            { !isSubmitting ?  text 
            : (
                <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                    { props.children }</>
                )
            }
            
        </Button>
    );
}
const Button = (props) => {
    return(
        <StrapButton {...props} />
    );
}

const ButtonSpinner = ({ children }) => (
    <>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
    { children }
    </>
);


Button.Spinner = Spinner;
Button.ButtonSpinner = ButtonSpinner;
export default Button;