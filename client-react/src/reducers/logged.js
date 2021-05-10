



const loggedReducer = (state = true, action) => { //change initial state back to false
    switch(action.type){
        case 'LOG_IN':
            return {...state}, true;
        case 'LOG_OUT':
            return {...state}, false;
        default:
            return {...state}, true; //Change back to false
    }
}

export default loggedReducer;