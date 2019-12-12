import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import userReducer from './userReducer';
import petReducer from './petReducer';
import walkerReducer from './walkerReducer';
import twilioReducer from './twillioReducer';
import profileReducer from "./profileReducer"

const rootReducer = combineReducers({ 
    userReducer,
    petReducer,
    walkerReducer,
    TR: twilioReducer,
    profileReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
