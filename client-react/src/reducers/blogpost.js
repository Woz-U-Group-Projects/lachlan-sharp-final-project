const blogpost = (state = false, action) => {
    switch(action.type) {
        case 'BLOG_POST':
            return  true
        default:
            return state
    }       
}

export default blogpost;