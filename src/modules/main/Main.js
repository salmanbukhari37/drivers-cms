import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import Dashboard from '@pages/Dashboard';
import Profile from '@pages/profile/Profile';

import PageLoading from '../../components/page-loading/PageLoading';
import * as ActionTypes from '../../store/actions';
import PrivateTwoColumns from '@app/modules/layouts/PrivateTwoColumns';
import Customer from '@app/customer/containers/Customer';

const Main = ({onUserLoad}) => {
    const [appLoadingState, updateAppLoading] = useState(false);
    

    useEffect(() => {
        updateAppLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await Gatekeeper.getProfile();
                onUserLoad({...response});
                updateAppLoading(false);
            } catch (error) {
                updateAppLoading(false);
            }
        };
        fetchProfile();
        return () => {};
    }, []);


    let template;

    if (appLoadingState) {
        template = <PageLoading />;
    } else {
        template = (
            <>
            <PrivateTwoColumns>
                <div className="content-wrapper">
                    <div className="pt-3" />
                    <section className="content">
                        <Dashboard />
                    </section>
                </div>
            </PrivateTwoColumns>
            </>
        );
    }

    return <div className="wrapper">{template}</div>;
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onUserLoad: (user) =>
        dispatch({type: ActionTypes.LOAD_USER, currentUser: user})
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
