import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/Welcome.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './Signup';

let userData = {};

class Welcome extends Component {



    usernameAction = (event) => {
        this.props.dispatch({
            type: 'USERNAME',
            payload: event
        })
    }

    passwordAction = (event) => {
        this.props.dispatch({
            type: 'PASSWORD',
            payload: event
        })
    }

    log_in = (userdata) => {
        this.props.dispatch({
            type: "USER_DATA",
            payload: userdata
        });
        this.props.dispatch({
            type: "LOG_IN"
        });
    }

    signupAction = () => {
        this.props.dispatch({
            type: 'SIGN_UP'
        })
    }

    signoffAction = () => {
        this.props.dispatch({
            type: 'SIGN_OFF'
        })
    }

    loginRequest = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.post(encodedURI, { username: this.props.username, password: this.props.password })
            .then(response => {
                userData = response.data;
                this.log_in(userData);
            })
    }



    render() {
        return (
            <div className='Welcome'>



                <div className='Welcome-Form-Container'>
                    {
                        (window.location.pathname === '/') ?

                            <div className='Welcome-Form'>
                                <Form action='/users' method='POST'>
                                    <Form.Group controlId="Form-Username">
                                        <Form.Label className='Login-Label'>Sign in:</Form.Label>
                                        <Form.Control
                                            type='text'
                                            size='lg'
                                            placeholder='Username'
                                            name='username'
                                            onChange={event => this.usernameAction(event.target.value)}></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="Form-Password">
                                        <Form.Control
                                            type='password'
                                            size='lg'
                                            placeholder='Password'
                                            name='password'
                                            onChange={event => this.passwordAction(event.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Button type='button'
                                        variant='dark'
                                        size='lg'
                                        onClick={this.loginRequest}>Login</Button>
                                </Form>
                                <div className='Welcome-Signup-Link'>
                                    <Router>
                                        <Link to='/signup'
                                            onClick={this.signupAction}>Not a user? Sign Up!</Link>
                                    </Router>
                                </div>
                            </div>
                            :

                            <div className='Signup-Component-Container'>
                                <Signup uri='http://localhost:3001/users/signup' />
                                <Router>
                                    <Link to='/'
                                        onClick={this.signoffAction}
                                        id='login-link'>Back to Login</Link>
                                </Router>
                            </div>

                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.isLogged,
        username: state.username,
        password: state.password,
        user: state.user,
        signup: state.signup
    }
}

export default connect(mapStateToProps)(Welcome);