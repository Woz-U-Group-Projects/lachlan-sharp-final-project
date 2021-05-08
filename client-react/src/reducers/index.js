import { combineReducers } from 'redux';
import loggedReducer from './logged';
import user from './user';
import passwordReducer from './password';
import usernameReducer from './username';
import signup from './signup';


const rootReducer = combineReducers({
    isLogged: loggedReducer,
    signup: signup,
    user,
    username: usernameReducer,
    password: passwordReducer

})

export default rootReducer;