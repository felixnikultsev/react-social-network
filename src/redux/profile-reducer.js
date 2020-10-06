import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const SAVE_PHOTO = 'profile/SAVE-PHOTO';

let initialState = {
    posts: [
        { id: 1, text: 'I am too dumb to write anything.', likesCount: 2 },
        { id: 2, text: 'I am insane!', likesCount: 12 },
        { id: 3, text: 'I think I turned blue. I have heard it turns women on.', likesCount: 48 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {
                        id: 4,
                        text: action.newPostText,
                        likesCount: 0,
                    },
                    ...state.posts,
                ],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SAVE_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.payload },
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
const savePhoto = (photos) => ({ type: SAVE_PHOTO, payload: photos });

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
        dispatch(setUserStatus(data));
    });
};

export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export const loadAvatar = (file) => (dispatch) => {
    profileAPI.loadAvatar(file).then((data) => {
        if (data.resultCode === 0) {
            dispatch(savePhoto(data.data.photos));
        }
    });
};

export const saveProfile = (profile) => async (dispatch) => {
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getUserProfile(profile.userId));
        return Promise.resolve(profile.userId);
    } else {
        dispatch(stopSubmit('profile', { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;
