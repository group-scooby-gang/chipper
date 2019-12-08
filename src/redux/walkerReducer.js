import axios from 'axios';

const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: 0,
    address: '',
    zip: 0,
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_WALKER = 'REGISTER_WALKER';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const resetFields = () => {
    return {
        type: RESET_FIELDS
    }
}

export const registerWalker = (walkerInfo) => {
    return {
        type: REGISTER_WALKER,
        payload: axios.post('/Chipper/Register/Walker', walkerInfo)
    }
}

export default function walkerReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                ...payload
            };
        case RESET_FIELDS:
            return {
                ...state
            };
        case `${REGISTER_WALKER}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${REGISTER_WALKER}_FULFILLED`:
            return {
                loading: false,
                firstname: payload.data.firstname,
                lastname: payload.data.lastname,
                username: payload.data.username,
                password: payload.data.password,
                email: payload.data.email,
                phone: payload.data.phone,
                address: payload.data.address,
                zip: payload.data.zip
            }
        default:
            return state;
    }
}