import * as ActionTypes from '../actions';

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    currentUser: {
        email: localStorage.getItem('email')
    }

};

const reducer = (state = initialState, action) => {
    if (action.type === ActionTypes.LOGIN_USER) {
        localStorage.setItem('token', action?.data?.token);
        localStorage.setItem('email', action?.data?.email);
        return {
            ...state,
            isLoggedIn: true,
            currentUser: {
                email: action?.data?.email
            },
            token: action?.data?.token
        };
    }

    if (action.type === ActionTypes.LOGOUT_USER) {
        localStorage.removeItem('token');
        return {
            ...state,
            isLoggedIn: false,
            token: null,
            currentUser: {
                email: 'mail@example.com',
                picture: null
            }
        };
    }
    if (action.type === ActionTypes.LOAD_USER) {
        return {
            ...state,
            currentUser: action.currentUser
        };
    }

    return {...state};
};

export default reducer;
