import axios from 'axios';

const initialState = {
    category: 'walker',
    bio: '',
    fifteen: 0,
    thirty: 0,
    fortyfive: 0,
    sixty: 0,
    loading: false,
    walkerJobs: [],
    address: '',
    city: '',
    state: '',
    zip: 0,
    email: '',
    phone: 0,
    firstname: '',
    lastname: '',
    username: '',
    profileimg: '',
    walkerInfo: {}
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_WALKER = 'REGISTER_WALKER';
const GET_SCHEDULE = 'GET_SCHEDULE';
const GET_WALKER_INFO = 'GET_WALKER_INFO';
const UPDATE_WALKER = 'UPDATE_WALKER';
const ACCEPT_JOB = 'ACCEPT_JOB';
const DECLINE_JOB = 'DECLINE_JOB';

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

export const getWalkerInfo = () => {
    return {
        type: GET_WALKER_INFO,
        payload: axios.get('/Chipper/Profile/Walker')
    }
}

export const updateWalker = (username, firstname, lastname, email, profileimg, phone, address, city, state, zip, bio, fifteen, thirty, fortyfive, sixty) => {
    return {
        type: UPDATE_WALKER,
        payload: axios.put('/Chipper/Walker/Profile/Edit', {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            profileimg: profileimg,
            phone: phone,
            address: address,
            city: city,
            state: state,
            zip: zip,
            experience: bio,
            _15minprice: fifteen,
            _30minprice: thirty,
            _45minprice: fortyfive,
            _60minprice: sixty
        })
    }
}

export const acceptPendingJob = (id) => {
    console.log(id)
    return {
        type: ACCEPT_JOB,
        payload: axios.put(`/Chipper/Jobs/Accept/${id}`)
    }
}

export const declinePendingJob = (id) => {
    return {
        type: DECLINE_JOB,
        payload: axios.delete(`/Chipper/Jobs/Decline/${id}`)
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
                walkerJobs: payload.data
            };
        case `${GET_WALKER_INFO}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_WALKER_INFO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                walkerInfo: payload.data[0]
            };
        case `${UPDATE_WALKER}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_WALKER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                payload: payload.data
            };
        case `${ACCEPT_JOB}_FULFILLED`:
            return {
                ...state,
                loading: false,
                payload: payload.data
            };
        case `${DECLINE_JOB}_FULFILLED`:
            return {
                ...state,
                loading: false,
                payload: payload.data
            }
        default:
            return state;
    }
}