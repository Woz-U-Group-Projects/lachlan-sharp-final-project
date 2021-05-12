



const loggedReducer = (state = false, action) => { //change initial state back to false
    switch(action.type){
        case 'LOG_IN':
            return  true;
        case 'LOG_OUT':
            return {...state}, false;
        default:
            return state; //Change back to false
    }
}

export default loggedReducer;