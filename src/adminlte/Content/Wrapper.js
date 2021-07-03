import React from 'react';

const Wrapper = ({ children, className }) => (
    <div className={`content${className ? ' ' + className : ''}`}>
        { children }
    </div>
);

export default Wrapper;