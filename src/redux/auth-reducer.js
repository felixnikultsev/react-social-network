import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: { id, login, email, isAuth },
});

const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: captchaUrl });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.getAuthUserData().then((data) => {
        if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
};

export const login = (email, password, rememberMe, captcha = null) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            dispatch(
                stopSubmit('login', {
                    _error: data.messages.length > 0 ? data.messages[0] : 'Error',
                }),
            );
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

const getCaptchaUrl = () => (dispatch) => {
    authAPI.getCaptchaUrl().then((data) => {
        dispatch(setCaptchaUrl(data.url));
    });
};

export default authReducer;
