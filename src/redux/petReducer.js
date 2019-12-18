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
const EDIT_PET = "EDIT_PET";


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

export const editPet = (name, breed, age, img, pet_id) => {
    return {
        type: EDIT_PET,
        payload: axios.put(`/Chipper/Pet/Edit/${pet_id}`, {
            name: name,
            breed: breed,
            age: age,
            img: img
        })
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
        case `${PET_DETAILS}_FULFILLED`:
            console.log("vklrwho")
            return {
                ...state,
                loading: false,
                pet: payload.data
            }
        case   `${EDIT_PET}_PENDING`:
            return {
                ...state, 
                loading: true
            }
        case `${EDIT_PET}_FULFILLED`:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}