export const getUsers = (state) => {
    return state.users.users;
};

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount;
};

export const getPageSize = (state) => {
    return state.users.pageSize;
};

export const getCurrentPage = (state) => {
    return state.users.currentPage;
};

export const getIsFetching = (state) => {
    return state.users.isFetching;
};

export const getIsFetchingFollow = (state) => {
    return state.users.isFetchingFollow;
};

export const getPortionSize = (state) => {
    return state.users.portionSize;
};
