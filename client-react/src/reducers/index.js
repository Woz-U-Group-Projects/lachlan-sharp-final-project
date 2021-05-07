import { combineReducers } from 'redux';
import loggedReducer from './logged';
import user from './user';
import passwordReducer from './password';
import usernameReducer from './username';


const rootReducer = combineReducers({
    isLogged: loggedReducer,
    user,
    username: usernameReducer,
    password: passwordReducer

})

export default rootReducer;