const ButtonSpinner = ({ children }) => (
    <>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
    { children }
    </>
);

export default ButtonSpinner;