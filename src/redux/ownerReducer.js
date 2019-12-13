import axios from 'axios';

const initialState = {
	price: '',
	jobsaccepted: '',
	notes: '',
	date: '',
	year: '',
	month: '',
	time: '',
	jobs: [],
	selectedDay: null,
	loading: false
}

const ON_DAY_CLICK = 'ON_DAY_CLICK';
const UPDATE_STATE = 'UPDATE_STATE';
const VIEW_SCHEDULE = 'VIEW_SCHEDULE';

export const onDayClick = (e, day) => {
	return {
		type: ON_DAY_CLICK,
		payload: day
	}
}

export const updateState = (e) => {
	return {
		type: UPDATE_STATE,
		payload: e
	};
};

export const viewSchedule = () => {
	return {
		type: VIEW_SCHEDULE,
		payload: axios.get('/Chipper/Owner/Schedule')
	};
};

export default function ownerReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_STATE:
			return {
				...state,
				...payload
			};
		case `${VIEW_SCHEDULE}_PENDING`:
			return { ...state, loading: true 
			};
		case `${VIEW_SCHEDULE}_FULFILLED`:
			console.log(payload.data);
			return {
				...state,
				jobs: payload.data,
				loading: false
			};
		case `${ON_DAY_CLICK}_FULFILLED`:
			console.log(payload.data);
			return {
				...state,
				selectedDay: payload.data.day
			};
		default:
			return state;
	}
}
