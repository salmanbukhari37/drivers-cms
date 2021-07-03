import React, { useState } from 'react';

import {
    Dropdown as StrapDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Item = ({ children }) => {
    return(
        <DropdownItem tag="a" className="dropdown-item">    
            { children }
        </DropdownItem>
    );
}

const Divider = () => (
    <div className="dropdown-divider" />
);

const Dropdown = ({ children, icon, badge }) => {
    let Icon = icon;
    let Badge = badge;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <StrapDropdown isOpen={ dropdownOpen } toggle={ toggle }>
            <DropdownToggle tag="a" className="nav-link">
                { Icon && <Icon /> }
                { Badge && <Badge /> }
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu dropdown-menu-right" right>
                    { children }
            </DropdownMenu>
        </StrapDropdown>
    );
}

Dropdown.Divider = Divider;
Dropdown.Item = Item;

export default Dropdown;