let initialState = false;

const signup = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return  true
        case 'SIGN_OFF':
            return  false
        default:
            return state
    }       
}

export default signup;