import axios from 'axios';

const initialState = {
	jobsaccepted: '',
	notes: '',
	day: null,
	year: null,
	month: null,
	time: null,
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
	payment: 0,
	extraNotes: '',
	jobs: [],
	pets: [],
	walkers: [],
	searchedWalker: [],
	loading: false,
	walker_phone: 0
}

const ON_DAY_CLICK = 'ON_DAY_CLICK';
const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const VIEW_SCHEDULE = 'VIEW_SCHEDULE';
const GET_PETS = 'GET_PETS';
const GET_WALKERS = 'GET_WALKERS';
const SEARCH_WALKERS = 'SEARCH_WALKERS';
const GET_WALKERS_PRICE = 'GET_WALKERS_PRICE';
const ADD_JOB = 'ADD_JOB';
const GET_WALKER_PHONE = "GET_WALKER_PHONE";

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

export const addNewJob = (selectedPet, payment, extraNotes, selectedWalker, month, day, year, time) => {
	return {
		type: ADD_JOB,
		payload: axios.post('/Chipper/Jobs/Hire', {
			pet_id: selectedPet,
			price: payment,
			notes: extraNotes,
			walker_id: selectedWalker,
			month: month,
			date: day,
			year: year,
			time: time
		})
	}
}

export const walkerPhoneNumber = (walker_id) => {
	return {
		type: GET_WALKER_PHONE,
		payload: axios.get(`/Chipper/Phone/${walker_id}`)
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
			return { ...state, loading: true 
			};
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
			};
		case `${ADD_JOB}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${ADD_JOB}_FULFILLED`:
			return {
				...state,
				loading: false,
				payload: payload.data
			};
		case `${GET_WALKER_PHONE}_PENDING`:
			return {
				...state, 
				loading: true
			}
		case `${GET_WALKER_PHONE}_FULFILLED`:
			return {
				...state, 
				loading: false, 
				walker_phone: payload.data
			}
		default:
			return state;
	}
}
