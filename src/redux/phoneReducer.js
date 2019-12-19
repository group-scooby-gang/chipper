import axios from "axios";

const initialState =  {
    loading: false, 
    ownerPhone: 0
}


const OWNER_PHONE = "OWNER_PHONE";
const SEND_OTW_MESSAGE = "SEND_OTW_MESSAGE"; //on the way message
const SEND_START_MESSAGE = "SEND_START_MESSAGE"; //walk starting message
const SEND_COMPLETE_MESSAGE = "SEND_COMPLETE_MESSAGE" //complete walk message
const SEND_ACCEPT_MESSAGE = 'SEND_ACCEPT_MESSAGE' //accept walk message
const SEND_DECLINE_MESSAGE = 'SEND_DECLINE_MESSAGE' //decline walk message

export const getOwnerPhone = (owner_id) => {
    return {
        type: OWNER_PHONE,
        payload: axios.get(`/Chipper/Phone/${owner_id}`)
    }
}

export const sendOTWMessage = (ownerPhone) => {
    return {
        type: SEND_OTW_MESSAGE,
        payload: axios.post(`/sms/owner/onTheWay`, {
            number: ownerPhone
        })
    }
}


export const sendStartMessage = (owner_phone) => {
    return {
        type: SEND_START_MESSAGE,
        payload: axios.post(`/sms/owner/walkStarted` ,{
            number: owner_phone
        })
    }
}

export const sendCompleteMessage = (owner_phone) => {
    return {
        type: SEND_COMPLETE_MESSAGE,
        payload: axios.post("/sms/owner/walkCompleted", {
            number: owner_phone
        })
    }
}

export const acceptWalkMessage = (owner_phone) => {
    return {
        type: SEND_ACCEPT_MESSAGE,
        payload: axios.post("/sms/owner/acceptedWalk", {
            number: owner_phone
        })
    }
}

export const declineWalkMessage = (owner_phone) => {
    return {
        type: SEND_DECLINE_MESSAGE,
        payload: axios.post("/sms/owner/declinedWalk", {
            number: owner_phone
        })
    }
}

export default function reducer (state = initialState, action){
    const {payload, type} = action;
    switch(type){
        case `${OWNER_PHONE}_PENDING`:
            return {...state, loading: true}
        case `${OWNER_PHONE}_FULFILLED`:
            console.log(payload.data)
            return {...state, loading: false, ownerPhone: payload.data}
        case `${SEND_OTW_MESSAGE}_PENDING`:
            return {...state, loading: true}
        case `${SEND_ACCEPT_MESSAGE}_FULFILLED`:
            return {...state, loading: false, ownerPhone: payload.data}
        case `${SEND_DECLINE_MESSAGE}_FULFILLED`:
            return {...state, loading: false, ownerPhone: payload.data}
        default:
            return state
    }
}