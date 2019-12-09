import axios from 'axios';

const initialState = {
	name: '',
	message: '',
	number: '',
	userNumber: '',
	receipt: []
};

const SEND_SMS = 'SEND_SMS';
const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const sendSms = (number, name, userNumber, message) => {
	return {
		type: SEND_SMS,
		payload: axios.post('/sms', { number, name, userNumber, message })
	};
};

export const handleChange = (e) => {
	return {
		type: HANDLE_CHANGE,
		payload: e
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case HANDLE_CHANGE:
			return { ...state, ...payload };
		case `${SEND_SMS}_FULFILLED`:
			return {
				...state,
				receipt: payload.data
			};
		default:
			return state;
	}
}
