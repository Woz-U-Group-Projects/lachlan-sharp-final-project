import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/Welcome.css';
import { connect } from 'react-redux'; 
import axios from 'axios';


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
            type:"LOG_IN"
        });
        this.props.dispatch({
            type:"USER_DATA",
            payload: userdata
        })
    }

    loginRequest = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        console.log(encodedURI);
        return axios.post(encodedURI, {username: this.props.username.username, password: this.props.password.password}).then(response => {
            this.log_in(response);
        })
    }



    render() {
        return (
            <div className='Welcome'>
                
                

                <div className='Welcome-Form-Container'>
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
                    </div>
                </div>
            </div>
        )
     }
}

function mapStateToProps(state) {
    return {
        isLogged: state.isLogged,
        username: state.username,
        password: state.password
    }
}

export default connect(mapStateToProps)(Welcome);