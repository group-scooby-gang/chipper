import axios from 'axios';

const initialState = {
	price: '',
	jobsaccepted: '',
	notes: '',
	date: '',
	year: '',
	time: '',
	jobs: []
};

const UPDATE_STATE = 'UPDATE_STATE';
const VIEW_SCHEDULE = 'VIEW_SCHEDULE';

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

		case VIEW_SCHEDULE:
			console.log(payload.data);
			return {
				...state,
				jobs: payload.data
			};
		default:
			return state;
	}
}
