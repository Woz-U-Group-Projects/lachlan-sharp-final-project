import { combineReducers } from 'redux';
import loggedReducer from './logged';
import user from './user';
import signup from './signup';
import blogs from './blogs';
import blogpost from './blogpost';

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    signup,
    user,
    blogs,
    blogpost
})

export default rootReducer;