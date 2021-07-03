import React, {useState} from 'react'

import Header from 'modules/main/header/Header';
import HelmetHeader from 'pages/Header';
import Footer from 'modules/main/footer/Footer';
import MenuSidebar from 'modules/main/menu-sidebar/MenuSidebar';

function PrivateTwoColumns({children, pageTitle}) {
    const [menusidebarState, updateMenusidebarState] = useState({
        isMenuSidebarCollapsed: false
    });

    const toggleMenuSidebar = () => {
        updateMenusidebarState({
            isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed
        });
    };
    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');

    document.getElementById('root').className += ' sidebar-mini';

    if (menusidebarState.isMenuSidebarCollapsed) {
        document.getElementById('root').classList.add('sidebar-collapse');
        document.getElementById('root').classList.remove('sidebar-open');
    } else {
        document.getElementById('root').classList.add('sidebar-open');
        document.getElementById('root').classList.remove('sidebar-collapse');
    }

    return (
        <div>
            <HelmetHeader pageTitle={pageTitle} />
            <Header toggleMenuSidebar={toggleMenuSidebar} />
            <MenuSidebar />
            {children}
            <div
                id="sidebar-overlay"
                role="presentation"
                onClick={toggleMenuSidebar}
                onKeyDown={() => {}}
            />
        </div>
    )
}

PrivateTwoColumns.defaultProps = {
    pageTitle: "Dashboard",
}

export default PrivateTwoColumns
