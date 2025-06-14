import {combineReducers} from 'redux';
import {Reducer} from './itemReducer.js';

const rootReducer=combineReducers({
    item:Reducer,
})

export default rootReducer;