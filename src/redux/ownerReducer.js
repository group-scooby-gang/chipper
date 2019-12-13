import axios from 'axios';

const initialState = {
	price: '',
	jobsaccepted: '',
	notes: '',
	day: null,
	year: null,
	month: null,
	time: null,
	selectedPet: null,
	selectedWalker: null,
	jobs: [],
	pets: [],
	walkers: [],
	searchedWalker: [],
	loading: false
};

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const VIEW_SCHEDULE = 'VIEW_SCHEDULE';
const GET_PETS = 'GET_PETS';
const GET_WALKERS = 'GET_WALKERS';
const SEARCH_WALKERS = 'SEARCH_WALKERS';

export const updateState = (e) => {
	return {
		type: UPDATE_STATE,
		payload: e
	};
};

export const resetFields = () => {
	return {
		type: RESET_FIELDS
	}
}

export const viewSchedule = () => {
	return {
		type: VIEW_SCHEDULE,
		payload: axios.get('/Chipper/Owner/Schedule')
	};
};

export const getOwnerPets = () => {
	return {
		type: GET_PETS,
		payload: axios.get('/Chipper/Owner/Pets')
	}
}

export const getWalkers = () => {
	return {
		type: GET_WALKERS,
		payload: axios.get('/Chipper/Walker/Applications/Approved')
	}
}

export const searchWalkers = (state, city) => {
	return {
		type: SEARCH_WALKERS,
		payload: axios.get(`/Chipper/Walker/Search?state=${state}&city=${city}`)
	}
}

export default function ownerReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_STATE:
			return {
				...state,
				...payload
			};
		case RESET_FIELDS:
			return {
				...state
			}
		case `${VIEW_SCHEDULE}_PENDING`:
			return { ...state, loading: true };

		case `${VIEW_SCHEDULE}_FULFILLED`:
			return {
				...state,
				jobs: payload.data,
				loading: false
			};
		case `${GET_PETS}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${GET_PETS}_FULFILLED`:
			return {
				...state,
				loading: false,
				pets: payload.data
			};
		case `${GET_WALKERS}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${GET_WALKERS}_FULFILLED`:
			return {
				...state,
				loading: false,
				walkers: payload.data
			};
		case `${SEARCH_WALKERS}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${SEARCH_WALKERS}_FULFILLED`:
			return {
				...state,
				loading: false,
				searchedWalker: payload.data
			}
		default:
			return state;
	}
}
