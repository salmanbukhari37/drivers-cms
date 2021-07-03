import React from 'react';
import { Badge } from 'reactstrap';

const MenuItem = ({ children, icon, active, badge }) => (
    <li className="nav-item">
        <span className={`nav-link${ active ? ' active' : ''}`}>
        { icon && <i className={`nav-icon ${ icon }` } /> }
        <p>{ children }</p>
        { badge && <Badge className="right" color="danger"> New</Badge> }
        </span>
    </li>
);

export default MenuItem;

{/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="" />
                  <p>
                    Simple Link
                    
                  </p>
                </a>
              </li> */}