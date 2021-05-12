

const user = (state = {}, action) => {
    switch(action.type) {
        case 'USER_DATA':
            return action.payload
        case 'USER_LOGOUT':
            return state = {};
        default:
            return {...state};
    }
}

export default user;