import React from 'react';

import { Nav as StrapNav, NavItem } from 'reactstrap';
import Dropdown from './Nav/Dropdown';

const Nav = (props) => {
    return(
        <StrapNav className={ `navbar-nav ${props.className}` }>
            { props.children }
        </StrapNav>
    );
}

Nav.Item = NavItem;
Nav.Dropdown = Dropdown;
export default Nav