import axios from 'axios';

const initialState = {
	username: '',
	password: '',
	firstName: '',
	lastName: '',
	email: ''
};

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(userInfo) {
	return {
		type: REGISTER_USER,
		payload: axios.post('/Chipper/Register')
	};
}

// export function loginUser(username, password) {
// 	return {
// 		type: LOGIN_USER,
// 		payload: axios.post('/Chipper/Login', {
// 			username: username,
// 			password: password
// 		})
// 	};
// }

export function logoutUser() {
	return {
		type: LOGOUT_USER,
		payload: axios.post('')
	};
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case `${LOGIN_USER}_PENDING`:
			console.log('Hello');

		case `${REGISTER_USER}_FULFILLED`:
			return {
				username: payload.data.username,
				firstName: payload.data.firstName,
				lastName: payload.data.lastName
			};
		// case `${LOGIN_USER}_FULFILLED`:
		// 	console.log(payload);
		// 	return {
		// 		username: payload.data.username,
		// 		password: payload.data.password
		// 	};
		case `${LOGOUT_USER}_FULFILLED`:
			return initialState;
		default:
			return state;
	}
}
