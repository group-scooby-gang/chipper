import axios from 'axios';

const initialState = {
    name: '',
    breed: '',
    age: 0,
    img: '',
    loading: false,
    pet: []
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_PET = 'REGISTER_PET';
const PET_DETAILS = "PET_DETAILS";


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

export const registerPet = (name, breed, age, img) => {
    return {
        type: REGISTER_PET,
        payload: axios.post('/Chipper/Pet/Add', {
            name: name,
            breed: breed,
            age: age,
            img: img
        })
    }
}

export const petDetails = (pet_id) => {
    return {
        type: PET_DETAILS,
        payload: axios.get(`/Chipper/Pet/Details/${pet_id}`)
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
                ...state,
                loading: false,
                payload: payload.data
            };
        case `${PET_DETAILS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${PET_DETAILS}_FULFILED`:
            console.log(payload.data)
            return {
                ...state,
                loading: false,
                pet: payload.data
            }
        default:
            return state;
    }
}