import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import userReducer from './userReducer';
import petReducer from './petReducer';
import walkerReducer from './walkerReducer';
import twilioReducer from './twillioReducer';
import profileReducer from "./profileReducer";

import ownerReducer from './ownerReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({ 
    userReducer,
    petReducer,
    walkerReducer,
    TR: twilioReducer,
    profileReducer,
    ownerReducer,
    calendarReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
