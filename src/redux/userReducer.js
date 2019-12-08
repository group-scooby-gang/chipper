import axios from 'axios';

const initialState = {
	userName: '',
	firstName: '',
	lastName: '',
	email: ''
};

const REGISTER_USER = 'REDIGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(userInfo) {
	return {
		type: REGISTER_USER,
		payload: axios.post('/Chipper/Register', userInfo)
	};
}

export function loginUser(userInfo) {
	return {
		type: LOGIN_USER,
		payload: axios.post('/Chipper/Login', userInfo)
	};
}

export function logoutUser() {
	return {
		type: LOGOUT_USER,
		payload: axios.post('/Chipper/Logout')
	};
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case `${REGISTER_USER}_FULFILLED`:
			return {
				userName: payload.data.userName,
				firstName: payload.data.firstName,
				lastName: payload.data.lastName
			};
		case `${LOGIN_USER}_FULFILLED`:
			console.log(payload);
			return {
				userName: payload.data.userName,
				firstName: payload.data.firstName,
				lastName: payload.data.lastName
			};
		case `${LOGOUT_USER}_FULFILLED`:
			return initialState;
		default:
			return state;
	}
}
