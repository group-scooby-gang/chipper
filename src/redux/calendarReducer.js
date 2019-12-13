// import axios from 'axios';

const initialState = {
    month: null,
    day: null,
    year: null,
    selectedMonth: null,
    selectedDay: null,
    selectedYear: null
}

const UPDATE_STATE = 'UPDATE_STATE';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export default function calendarReducer(state = initialState, action ) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_STATE:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
}