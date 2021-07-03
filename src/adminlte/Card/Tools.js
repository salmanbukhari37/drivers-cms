// Card Tools

const Tools = (props) => (
    <div className="card-tools" { ...props }> 
        { props.children }
    </div>
);

export default Tools;