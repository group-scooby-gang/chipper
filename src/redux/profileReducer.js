import axios from "axios"



const initalState = {
    loading: false,
    pets: []
}



const GET_PETS = "GET_PETS"



export const getPets = () => {
    return {
        type: GET_PETS,
        payload: axios.get("/Chipper/Owner/Pets")
    }
}



export default function reducer  (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_PETS}_PENDING`:
            return {...state, loading: true}
        case `${GET_PETS}_FULFILLED`:
            return {...state, loading: false, pets: payload.data}
        default:
            return state
    }
}