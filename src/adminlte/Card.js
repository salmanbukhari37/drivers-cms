
import { 
    Card as StrapCard,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter
} from 'reactstrap';

const Title = (props) => (
    <CardTitle tag="h3">
        { props.children }
    </CardTitle>
);

const Header = (props) => (
    <CardHeader { ...props }>
        { props.children }
    </CardHeader>
);

const Tools = (props) => (
    <div className="card-tools" { ...props }> 
        { props.children }
    </div>
);

const Card = (props) => {
    let color = props.color !== undefined ? props.color : 'primary';
    let outline = props?.outline ? ' card-outline' : '';
    return(
        <StrapCard { ...props } className={`card-${color}${outline}`}>
            { props.children }
        </StrapCard>
    );
}


Card.Header = Header;
Card.Title = Title;
Card.Body = CardBody;
Card.Tools = Tools;
Card.Footer = CardFooter;
export default Card;