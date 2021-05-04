import { combineReducers } from 'redux';
import loggedReducer from './logged';


const rootReducer = combineReducers({
    isLogged: loggedReducer


})

export default rootReducer;