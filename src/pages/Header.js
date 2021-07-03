import React from 'react'
import {Helmet} from "react-helmet";

function Header({pageTitle, companyName}) {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{pageTitle}</title>
        </Helmet>
        
        </>
    )
}

Header.defaultProps = {
    pageTitle: "Dashboard"
}

export default Header
