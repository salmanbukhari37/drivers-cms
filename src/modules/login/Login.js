import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';

import * as Yup from 'yup';
import * as ActionTypes from '../../store/actions';
import * as genericActions from 'generic/actions';

const Login = (props) => {
    const [t] = useTranslation();

    const printFormError = (formik, key) => {
        if (formik.touched[key] && formik.errors[key]) {
            return <div>{formik.errors[key]}</div>;
        }
        return null;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required')
        }),
        onSubmit: (values) => {
            const {dispatch} = props;
            dispatch(genericActions.callGenericAsync(values, '/api/auth/admin-login', 'post', (res) => {
                dispatch({type: ActionTypes.LOGIN_USER, data: res?.data});
            }))

        }
    });

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Drive</b>
                        <span>Safe</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">{t('login.label.signIn')}</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    {...formik.getFieldProps('email')}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...formik.getFieldProps('password')}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {printFormError(formik, 'password')}
                        </div>
                        <div className="row">
                            <div className="col-4 ml-0 mr-auto ">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = ({ auth }) => {
    return {
      ...auth
    }
  }
export default connect(mapStateToProps)(Login);