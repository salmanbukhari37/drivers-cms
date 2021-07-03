import React from 'react';

import { Navbar as StrapNavbar } from 'reactstrap';
import MiniSearch from './Navbar/MiniSearch';

const Navbar = (props) => {
    return(
        <StrapNavbar { ...props } className={ `main-header navbar navbar-expand ${ props.className }` }>
            { props.children }
        </StrapNavbar>
    )
}

Navbar.MiniSearch = MiniSearch;
export default Navbar;