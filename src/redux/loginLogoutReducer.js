import axios from 'axios';

const initialState = {
userName: '',
firstName: '',
lastName: '',
email: ''
}

const REGISTER_USER = 'REDIGISTER_USER';
cosnt LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(userInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/user/new', userInfo)
    }
}

export function loginUser(userInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/user/login', userInfo)
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: axios.post('/auth/user/logout')
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case `${REGISTER_USER}`:
            return {
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName
            }
        case `${LOGIN_USER}`:
            console.log(payload)
            return {
                userId: payload.data.userId,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName
            }
        case `${LOGOUT_USER}`:
            return initialState;
        default: return state;
    }
}