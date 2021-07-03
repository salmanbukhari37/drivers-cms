import React, { useState } from 'react';

import { Collapse } from 'reactstrap';

const TreeMenu = ({ icon, title, active, children }) => {

    let [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <li className={`nav-item${ isOpen ? ' menu-open' : '' }`}>
        <a href="#" className={`nav-link${ active ? ' active': '' }`} onClick={ toggle }>
          <i className={`nav-icon ${icon}`} />
          <p>
            { title }
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <Collapse isOpen={ isOpen }>
            <ul className={`nav nav-treeview`} style={{display: 'block'}}>
             { children }               
            </ul>
        </Collapse>
      </li>
    );
}

export default TreeMenu;