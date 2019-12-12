import axios from 'axios';

const initialState = {
    category: 'walker',
    bio: '',
    fifteen: 0,
    thirty: 0,
    fortyfive: 0,
    sixty: 0,
    loading: false,
    schedule: [],
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_WALKER = 'REGISTER_WALKER';
const GET_SCHEDULE = 'GET_SCHEDULE';

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

export const registerWalker = (bio, category, fifteen, thirty, fortyfive, sixty) => {
    return {
        type: REGISTER_WALKER,
        payload: axios.post('/Chipper/Walker/Applications/Submitted', {
            experience: bio,
            category: category,
            fifteen: fifteen,
            thirty: thirty,
            fortyfive: fortyfive,
            sixty: sixty
        })
    }
}

export const getWalkerSchedule = () => {
    return {
        type: GET_SCHEDULE,
        payload: axios.get('/Chipper/Walker/NextJobs')
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
                ...state,
                loading: false,
                payload: payload.data
            };
        case `${GET_SCHEDULE}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_SCHEDULE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                schedule: payload.data
            };
        default:
            return state;
    }
}