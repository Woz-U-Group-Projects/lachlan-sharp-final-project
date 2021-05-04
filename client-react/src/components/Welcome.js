import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/Welcome.css';
import { useSelector, useDispatch } from 'react-redux';
import { log_in } from '../actions';



class Welcome extends Component {



    render() {
        return (
            <div className='Welcome'>
                
                <div className='Welcome-Text-Container'>
                    <div className='Welcome-Text'>
                        Welcome to <span className='App-Welcome-Title'>Blogsite</span> !
                        <p>The <i><b>perfect</b></i> place to tell any story —Please login or sign up!</p>
                    </div>
                </div>

                <div className='Welcome-Line'></div>

                <div className='Welcome-Form-Container'>
                    <div className='Welcome-Form'>
                        <Form>
                            <Form.Group controlId="Form-Email">
                                <Form.Label className='Login-Label'>Sign in:</Form.Label>
                                <Form.Control type='email' size='lg' placeholder='Email'></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="Form-Password">
                                <Form.Control type='password' size='lg' placeholder='Password'></Form.Control>
                            </Form.Group>
                            <Button type='submit' 
                                    variant='dark'
                                    size='lg'
                                    >Login</Button>
                        </Form>
                    </div>
                </div>

            </div>
        )
    }
}


export default Welcome;