import axios from 'axios';

const initialState = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: 0,
  address: '',
  city: '',
  state: '',
  apt: 0,
  zip: 0,
  profileImg: 'https://i.pinimg.com/originals/0c/92/0d/0c920d58b210a74a75868df885160a5f.jpg'
};

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_USER = 'REDIGISTER_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const updateState = (e) => {
  return {
    type: UPDATE_STATE,
    payload: e
  }
}

export const resetFields = () => {
  return {
    type: RESET_FIELDS
  }
}

export function registerUser(username, firstName, lastName, password, email, profileImg, phone, address, apt, city, state, zip) {
  return {
    type: REGISTER_USER,
    payload: axios.post('/Chipper/Register', {
      username: username,
      firstname: firstName,
      lastname: lastName,
      password: password,
      email: email,
      profileimg: profileImg,
      phone: phone,
      address: address,
      apt: apt,
      city: city,
      state: state,
      zip: zip
    })
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: axios.post('')
  };
}

export default function reducer(state = initialState, action) {
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
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        payload: payload.data
      };
    // case `${LOGIN_USER}_PENDING`:
    //   return {
    //     ...state
    //   }
    // case `${LOGIN_USER}_FULFILLED`:
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
