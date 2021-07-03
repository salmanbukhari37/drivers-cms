import React, { useState } from 'react';
import Nav from './Sidebar/Nav';

import MenuItem from './Sidebar/MenuItem';
import Search from './Sidebar/Search';
import TreeMenu from './Sidebar/TreeMenu';
import UserInfo from './Sidebar/UserInfo';

const Sidebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="https://renegadefurniture.com/wp-content/uploads/2020/08/2019Round_white-01-300x300.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Renegade Furniture</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          { props.children } 
              
          
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
}

Sidebar.UserInfo = UserInfo;
Sidebar.Search = Search;
Sidebar.TreeMenu = TreeMenu;
Sidebar.MenuItem = MenuItem;
Sidebar.Nav = Nav;

export default Sidebar;