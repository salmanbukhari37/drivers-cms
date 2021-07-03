import React from 'react';
import { Container, Row } from 'reactstrap';

const Header = (props) => {
    return(
        <div className="content-header">
            <Container fluid>
                <Row className="mb-2">
                    { props.children }
                </Row>
            </Container>
        </div>
    );
}

export default Header;