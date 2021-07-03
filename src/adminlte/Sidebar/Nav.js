import React from 'react';

import {
    Nav as StrapNav
} from 'reactstrap';

const Nav = (props) => {
    return(
        <StrapNav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                { props.children }
            </ul>
        </StrapNav>
    );
}

export default Nav;