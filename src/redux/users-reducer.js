import { usersAPI } from '../api/api';

const TOGGLE_FOLLOW = 'users/TOGGLE-FOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FETCHING_FOLLOW = 'users/TOGGLE-IS-FETCHING-FOLLOW';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFetchingFollow: [],
    portionSize: 20,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: !user.followed };
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FETCHING_FOLLOW:
            return {
                ...state,
                isFetchingFollow: action.isFetchingFollow
                    ? [...state.isFetchingFollow, action.userId]
                    : state.isFetchingFollow.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFetchingFollow = (isFetchingFollow, userId) => ({
    type: TOGGLE_IS_FETCHING_FOLLOW,
    isFetchingFollow,
    userId,
});

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleIsFetchingFollow(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
    }
    dispatch(toggleIsFetchingFollow(false, userId));
};

export const follow = (userId) => (dispatch) => {
    const apiMethod = usersAPI.follow;
    followUnfollowFlow(dispatch, userId, apiMethod);
};

export const unfollow = (userId) => (dispatch) => {
    const apiMethod = usersAPI.unfollow;
    followUnfollowFlow(dispatch, userId, apiMethod);
};

export default usersReducer;
