import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
// Tabs


export const Preloader = (/* { visible }: Props */) => (
  <div className="overlay-wrapper">
    <div className="overlay">
        <i className="fas fa-3x fa-sync-alt fa-spin"></i><div class="text-bold pt-2">Loading...</div>
    </div>
  </div>
);



const Content = ({ children }) => {
    return(
        <>
        { children }
        </>
    )
}

const Tab = ({ tabId, activeTab, toggle, title }) => {
    console.log(tabId, activeTab);
    return(
        <NavItem>
            <NavLink style={{ cursor: 'pointer' }} 
                    className={classnames({ active: activeTab === tabId })} 
                    onClick={() => { toggle(tabId); }}
                >
            { title }    
            </NavLink>
        </NavItem>
    )
}

const Tabs = ({ children }) => {

    // Default Selected tab is 0, index below starts from 0 so first tab 
    // will be default be selected. This behaviour needs to be fixed with 
    // selected tab prop
    const [activeTab, setActiveTab] = useState(0);
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    const tabContent = new Array();
    const tabs = children.map((child, index) => {
        if(child.type === Tab) {
            const content = child.props.children;
            if(content.type === Content) {

                tabContent.push(
                    <TabPane tabId={ index }>
                        { content }
                    </TabPane>
                );
            }
            return (
                <Tab tabId={ index } title={ child.props.title } toggle={ toggle } activeTab={ activeTab } {...child.props} />
            );
        }
    });

    
   
    return(
        <Card className="card card-primary card-tabs">
        <CardHeader className="p-0 pt-1">
            <Nav tabs >
                { tabs }
            </Nav>
        </CardHeader>
        <CardBody>
            <TabContent activeTab={ activeTab }>
               { tabContent }
            </TabContent>
        </CardBody>
        </Card>
    )
}

Tab.Content = Content;
Tabs.Preloader = Preloader;

export { Tab };
export default Tabs;