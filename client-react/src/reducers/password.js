

const passwordReducer = (state = '', action) => {
    switch(action.type) {
        case 'PASSWORD':
            return {...state}, action.payload
        default:
            return state;
    }
}

export default passwordReducer;