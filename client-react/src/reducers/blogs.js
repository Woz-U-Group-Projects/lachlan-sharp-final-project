
const blogs = (state = {}, action) => {
    switch(action.type) {
        case 'BLOG_DATA':
            return action.payload
        default:
            return {...state};
    }
}

export default blogs;