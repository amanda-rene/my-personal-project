import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer'
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({
    userReducer, postReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))