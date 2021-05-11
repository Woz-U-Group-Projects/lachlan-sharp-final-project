const signup = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return  {...state}, true
        case 'SIGN_OFF':
            return  {...state}, false
        default:
            return state
    }       
}

export default signup;