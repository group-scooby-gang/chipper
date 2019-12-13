import axios from 'axios';

const initialState = {
	price: '',
	jobsaccepted: '',
	notes: '',
	day: null,
	year: null,
	month: null,
	time: '',
	selectedPet: null,
	selectedPetName: '',
	selectedPetImg: '',
	selectedWalker: null,
	selectedWalkerName: '',
	selectedWalkerImg: '',
	_15minprice: null,
	_30minprice: null,
	_45minprice: null,
	_60minprice: null,
	payment: null,
	extraNotes: '',
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
const GET_WALKERS_PRICE = 'GET_WALKERS_PRICE';

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

export const getWalkerById = (id) => {
	return {
		type: GET_WALKERS_PRICE,
		payload: axios.get(`/Chipper/Walker/${id}`)
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
			};
		case `${GET_WALKERS_PRICE}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${GET_WALKERS_PRICE}_FULFILLED`:
			return {
				...state,
				loading: false,
				_15minprice: payload.data[0]._15minprice,
				_30minprice: payload.data[0]._30minprice,
				_45minprice: payload.data[0]._45minprice,
				_60minprice: payload.data[0]._60minprice
			}
		default:
			return state;
	}
}
