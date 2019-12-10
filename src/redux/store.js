import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import userReducer from './userReducer';
import petReducer from './petReducer';
import walkerReducer from './walkerReducer';
import twilioReducer from './twillioReducer';

const rootReducer = combineReducers({ 
    userReducer,
    petReducer,
    walkerReducer,
    TR: twilioReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
