import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/Signup.css';
import axios from 'axios';


let username = '';
let password = '';
let age = null;
let email = '';
let firstName = '';
let lastName = '';



export default class Signup extends Component {

    signoffAction = () => {
        this.props.dispatch({
            type: 'SIGN_OFF'
        })
    }

    signupRequest= () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.post(encodedURI, {
            username: username,
            password: password,
            lastName: lastName,
            firstName: firstName,
            email: email,
            age: parseInt(age)
        })
        .then(console.log('User Created!'))
    }


    render() {
        return (
            <div className='Signup-Component'>
                <div className='Signup-Form'>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                size='lg'
                                placeholder='First Name: '
                                name='firstName'
                                id='Form-Control' 
                                onChange={event => firstName = event.target.value}
                                required/>
                        </Form.Group>
                        <Form.Group>

                            <Form.Control
                                type='text'
                                size='lg'
                                placeholder='Last Name: '
                                name='lastName'
                                id='Form-Control' 
                                onChange={event => lastName = event.target.value}
                                required/>
                        </Form.Group>
                        <Form.Group>

                            <Form.Control
                                type='email'
                                size='lg'
                                placeholder='Email: example@website.com'
                                name='email'
                                id='Form-Control'
                                onChange={event => email = event.target.value}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>

                            <Form.Control
                                type='text'
                                size='lg'
                                placeholder='Username'
                                name='username'
                                id='Form-Control'
                                onChange={event => username = event.target.value}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>

                            <Form.Control
                                type='password'
                                size='lg'
                                placeholder='Password'
                                name='password'
                                id='Form-Control'
                                onChange={event => password = event.target.value}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>

                            <Form.Control
                                type='number'
                                size='lg'
                                placeholder='Age'
                                name='age'
                                id='Form-Control'
                                onChange={event => age = event.target.value}
                                required></Form.Control>
                        </Form.Group>
                        <Button type='buton' 
                                id='Form-Button' 
                                variant='dark'
                                onClick={this.signupRequest}>Signup!</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
