const initialState = {
    password: ''
}

const passwordReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PASSWORD':
            return {...state, password: action.payload}
        default:
            return state;
    }
}

export default passwordReducer;