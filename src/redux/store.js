import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer';
import twilioReducer from './twillioReducer';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({ userReducer, TR: twilioReducer });

export default createStore(rootReducer, applyMiddleware(promise));
