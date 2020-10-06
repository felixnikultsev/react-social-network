import { getAuthUserData } from './auth-reducer';

const INITIALIZE = 'app/INITIALIZE';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initialize = () => ({ type: INITIALIZE });

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initialize());
    });
};

export default appReducer;
