import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8fa53128-466d-4a56-8bfe-88f6e75ecb34',
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`).then((response) => response.data);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then((response) => response.data);
    },
};

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then((response) => response.data);
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => response.data);
    },

    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status }).then((response) => response.data);
    },

    loadAvatar(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => response.data);
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile).then((response) => response.data);
    },
};

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`).then((response) => response.data);
    },

    login(email, password, rememberMe, captcha) {
        return instance
            .post(`auth/login`, { email, password, rememberMe, captcha })
            .then((response) => response.data);
    },

    logout() {
        return instance.delete(`auth/login`).then((response) => response.data);
    },

    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then((response) => response.data);
    },
};
