import axios from 'axios';

const initialState = {
    name: '',
    breed: '',
    age: 0,
    img: 'https://pbs.twimg.com/media/C6MOE7CUoAA_pHM.jpg',
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_PET = 'REGISTER_PET';

export const updateState = (e) => {
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

export const registerPet = (petInfo) => {
    return {
        type: REGISTER_PET,
        payload: axios.post('/Chipper/Register/Pet', petInfo)
    }
}

export default function petReducer(state = initialState, action) {
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
        case `${REGISTER_PET}_PEDNING`:
            return {
                ...state,
                loading: true
            };
        case `${REGISTER_PET}_FULFILLED`:
            return {
                loading: false,
                name: payload.data.name,
                breed: payload.data.breed,
                age: payload.data.age
            };
        default:
            return state;
    }
}