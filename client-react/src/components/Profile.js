import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheets/Profile.css';
import axios from 'axios';
import CreateBlogPost from './CreateBlogPost';
import { BrowserRouter as Router, Link } from 'react-router-dom';

let blogArray = [];


class Profile extends Component {

    log_out = () => {
        this.props.dispatch({
            type: 'LOG_OUT'
        })
        this.props.dispatch({
            type: 'USER_LOGOUT'
        })
    }

    blogDataAction = (blogdata) => {
        this.props.dispatch({
            type: 'BLOG_DATA',
            payload: blogdata
        })
    }

    createPostAction = () => {
        this.props.dispatch({
            type: 'BLOG_POST'
        })
    }

    blogpostRequest = () => {
        var encodedURI = window.encodeURI(`${this.props.uri}/userBlogs`);
        return axios.post(encodedURI, { userID: parseInt(this.props.user.iduser) })
        .then(response => {
            this.blogDataAction(response.data);
            blogArray = response.data;
            blogArray.reverse();
        })
    }

    requestTimeout = () => {
        setTimeout(this.blogpostRequest, 100);
    }

    componentWillMount() {
        this.requestTimeout();
    }

    // componentDidMount() {
    //     this.requestTimeout();
    // }



    render() {
        return (
            <div className="Profile">
                    { (window.location.pathname === '/')
                    ?
                <div className="Profile-Box">
                        <div className="Profile-Header">
                            <div className='Profile-Header-Name'>
                                {this.props.user.firstName} {this.props.user.lastName}
                            </div>
                            <div className='Profile-Header-Forum-Link'>
                                Forum
                            </div>
                            <div className='Profile-Header-Signout' onClick={this.log_out}>
                                Sign Out
                            </div>
                        </div>
                        <div className="Profile-Body">
                            <div className="Profile-Body-Title">
                                Your Blogs: 
                            </div>
                            <div className="Profile-Body-Blogs">
                                {blogArray.map(blog => {
                                    return (
                                        <div key={blog.blog_id} className='Profile-Individual-Blogpost'>
                                            {blog.blogName}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="Profile-Body-Create-Blog">
                                <Router>
                                    <Link to='/createBlogPost'
                                          onClick={this.createPostAction}>Create a Blog!</Link>
                                </Router>
                            </div>
                        </div>
                </div>
                    :
                    <div className="Profile-Box">
                        <CreateBlogPost uri='http://localhost:3001/users/createBlogPost'/>
                    </div>
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        isLogged: state.isLogged,
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(Profile);