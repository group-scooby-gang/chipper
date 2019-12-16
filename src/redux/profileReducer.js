import axios from "axios"



const initalState = {
    loading: false,
    pets: [],
    history: [],
    walkerProfle: [],
    walkerHistory: []
}



const GET_PETS = "GET_PETS"
const PET_HISTORY = "PET_HISTORY"
const WALKER_PROFILE = "WALKER_PROFILE"
const WALKER_HISTORY = "WALKER_HISOTRY"

export const getPets = () => {
    return {
        type: GET_PETS,
        payload: axios.get("/Chipper/Owner/Pets")
    }
}

export const walkHistory = (pet_id) => {
    return {
        type: PET_HISTORY,
        payload: axios.get(`/Chipper/Pet/History/${pet_id}`)
    }
}

export const getWalkerProfile = () => {
    return {
        type: WALKER_PROFILE,
        payload: axios.get("/Chipper/Profile/Walker")
    }
}

export const getWalkerHistory = () => {
    return {
        type: WALKER_HISTORY,
        payload: axios.get("/Chipper/History/Walker")
    }
}

export default function reducer  (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_PETS}_PENDING`:
            return {...state, loading: true}
        case `${GET_PETS}_FULFILLED`:
            return {...state, loading: false, pets: payload.data}
        case `${PET_HISTORY}_PENDING`:
            return {...state, loading: true}
        case `${PET_HISTORY}_FULFILLED`:
            return {...state, loading: false, history: payload.data}
        case `${WALKER_PROFILE}_PENDING`:
            return {...state, loading: true}
        case `${WALKER_PROFILE}_FULFILLED`:
            return {...state, loading: false, walkerProfle: payload.data}
        case `${WALKER_HISTORY}_PENDING`:
            return {...state, loading: true}
        case `${WALKER_HISTORY}_FULFILLED`:
            console.log(payload.data)
            return {...state, loading: false, walkerHistory: payload.data}
        default:
            return state
    }
}