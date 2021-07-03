import React from 'react';
import classes from './PageLoading.module.scss';

const PageLoading = () => {
    return (
        <div className={classes.loading}>
            <span>D</span>
            <span>R</span>
            <span>I</span>
            <span>V</span>
            <span>E</span>
            <span>{` `}</span>
            <span>S</span>
            <span>A</span>
            <span>F</span>
            <span>E</span>
        </div>
    );
};

export default PageLoading;
