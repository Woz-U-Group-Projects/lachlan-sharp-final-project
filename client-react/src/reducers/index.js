import { combineReducers } from 'redux';
import loggedReducer from './logged';
import user from './user';
import signup from './signup';


const rootReducer = combineReducers({
    isLogged: loggedReducer,
    signup,
    user
})

export default rootReducer;