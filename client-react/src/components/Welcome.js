import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/Welcome.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Signup from './Signup';

let userData = {};

let username = '';
let password = '';

class Welcome extends Component {

    // signupAction = () => {
    //     this.props.dispatch({
    //         type: 'SIGN_UP'
    //     })
    // }

    // signoffAction = () => {
    //     this.props.dispatch({
    //         type: 'SIGN_OFF'
    //     })
    // }

    loginRequest = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.post(encodedURI, { username: username, password: password })
            .then(response => {
                userData = response.data;
                if (response.data.iduser) {
                    this.props.log_in();
                    this.props.userData(userData);
                } else {
                    window.location.reload();
                    alert('Incorrect Username or Password')
                } 
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
                                            onChange={event => username = event.target.value}></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="Form-Password">
                                        <Form.Control
                                            type='password'
                                            size='lg'
                                            placeholder='Password'
                                            name='password'
                                            onChange={event => password = event.target.value}></Form.Control>
                                    </Form.Group>
                                    <Button type='button'
                                        variant='dark'
                                        size='lg'
                                        onClick={this.loginRequest}>Login</Button>
                                </Form>
                                <div className='Welcome-Signup-Link'>
                                    <Router>
                                        <Link to='/signup'
                                            onClick={() => this.props.signupAction()}>Not a user? Sign Up!</Link>
                                    </Router>
                                </div>
                            </div>
                            :

                            <div className='Signup-Component-Container'>
                                <Signup uri='http://localhost:3001/users/signup' />
                                <Router>
                                    <Link to='/'
                                        onClick={() => this.props.signoffAction()}
                                        id='login-link'>Back to Login</Link>
                                </Router>
                            </div>

                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        log_in: () => dispatch({ type: "LOG_IN" }),
        userData: (data) => dispatch({ type: "USER_DATA", payload: data }),
        signupAction: () => dispatch({ type: "SIGN_UP" }),
        signoffAction: () => dispatch({ type: "SIGN_OFF" })
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);