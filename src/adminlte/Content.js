import React from 'react';
import Header from './Content/Header';
import Wrapper from './Content/Wrapper';

const Title = (props) => {
    return(
        <div className="col-sm-6">
            <h1 className="m-0"> { props.children } </h1>
        </div>
    );
}

const Breadcrumb = (props) => {
    return(
        <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
                { props.children }
            </ol>
        </div>
    );
}

const Item = ({ href, active, children }) => {
    return(
        <li className={`breadcrumb-item${ active ? ' active': ''}`} >
            { !active ?
                (<a href={ href }> { children } </a>)
            : children 
            }
            
        </li>
    );
    
}

const Content = (props) => {

    return(
        <div className="content-wrapper">
            { props.children }
        </div>
    );
}


Breadcrumb.Item = Item;
Content.Wrapper = Wrapper;
Content.Header = Header;
Content.Title = Title;
Content.Breadcrumb = Breadcrumb;

export default Content;