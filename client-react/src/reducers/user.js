const userReducer = (state = {
    user: {}
}, action) => {
    switch(action.type) {
        case 'USER_DATA':
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default userReducer;