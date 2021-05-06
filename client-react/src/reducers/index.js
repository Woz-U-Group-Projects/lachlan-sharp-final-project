import { combineReducers } from 'redux';
import loggedReducer from './logged';
import userReducer from './user';
import passwordReducer from './password';
import usernameReducer from './username';


const rootReducer = combineReducers({
    isLogged: loggedReducer,
    user: userReducer,
    username: usernameReducer,
    password: passwordReducer

})

export default rootReducer;