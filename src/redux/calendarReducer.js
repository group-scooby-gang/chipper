// import axios from 'axios';

const initialState = {
    killer: [],
    month: null,
    date: null,
    year: null,
    selectedMonth: null,
    selectedDay: null,
    selectedYear: null
}

const UPDATE_STATE = 'UPDATE_STATE';

export const updateState = (e) => {
    return {
        type:UPDATE_STATE,
        payload:e
    }
}

export default function calendarReducer(state = initialState, action ) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_STATE:
            // console.log(payload.data)
            return {
                ...state,
                killer:payload.data
            };
        default:
            // console.log('calendar reducer:',initialState)
            return state;
    }
}