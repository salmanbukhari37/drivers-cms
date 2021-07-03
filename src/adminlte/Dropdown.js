import { Button } from 'reactstrap';
import React, { useState } from 'react';
import { 
    Dropdown as StrapDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

const Item = (props) => (
    <DropdownItem {...props}>
        { props.children }
    </DropdownItem>
);

/**
 * @todo This component needs to be made more general, at the moment
 *  the menu direction is forced to left to keep the alignement. 
 * @param {@todo} param0 
 */
const Dropdown = ({ children, Icon }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <StrapDropdown direction="left" isOpen={ dropdownOpen } toggle={ toggle }>
      <DropdownToggle tag="span">  
        <a style={{cursor: 'pointer'}}>
        { Icon ? <Icon />
        
        : <i className="fa fa-caret-square-down" />
        }
        </a>
      </DropdownToggle>
      <DropdownMenu>
     
        { children }
     
      </DropdownMenu>
    </StrapDropdown>
  );
}

Dropdown.Item = Item;
export default Dropdown;
