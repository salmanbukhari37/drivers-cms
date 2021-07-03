import React from 'react';

const NavToggle = ({onClick}) => {
    return(
        <a className="nav-link" onClick={onClick} data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" />
        </a>
    );
}

export default NavToggle;