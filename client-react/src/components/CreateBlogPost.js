import React, { Component } from 'react'
import '../stylesheets/BlogpostForm.css';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';



let blogName = '';
let blogContent = '';
let academic = 0;
let lifestyle = 0;
let professional = 0;
let opinion = 0;
let entertainment = 0;

class CreateBlogPost extends Component {

    blogpostCreate = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.post(encodedURI, {
            blogName: blogName,
            blogContent: blogContent,
            academic: parseInt(academic),
            lifestyle: parseInt(lifestyle),
            professional: parseInt(professional),
            opinion: parseInt(opinion),
            entertainment: parseInt(entertainment),
            iduser: parseInt(this.props.user.iduser)
        })
    }


    render() {
        return (
            <div className='Blogpost-Form'>
                <Form className="Form">
                    <Form.Group className="Blog-Title">
                        <Form.Control 
                            type='text'
                            size='lg'
                            placeholder='Title...'
                            name='blogName'
                            onChange={event => blogName = event.target.value} />
                    </Form.Group>
                    <Form.Group className="Checkboxes">
                        <Form.Check inline label="Academic" 
                                           name="academic" 
                                           type='checkbox'
                                           onClick={() => { if(academic === 0) {
                                               academic = 1;
                                               console.log('Academic:', academic);
                                           } else {
                                               academic = 0;
                                               console.log('Academic:', academic);
                                           }}} />
                        <Form.Check inline label="Lifestyle" 
                                           name="lifestyle" 
                                           type='checkbox'
                                           onClick={() => { if(lifestyle === 0) {
                                            lifestyle = 1;
                                            console.log('Lifestyle:', lifestyle);
                                        } else {
                                            lifestyle = 0;
                                            console.log('Lifestyle:', lifestyle);
                                        }}} />
                        <Form.Check inline label="Professional" 
                                           name="professional" 
                                           type='checkbox'
                                           onClick={() => { if(professional === 0) {
                                            professional = 1;
                                            console.log('Professional:', professional);
                                        } else {
                                            professional = 0;
                                            console.log('Professional:', professional);
                                        }}} />
                        <Form.Check inline label="Opinion" 
                                           name="opinion" 
                                           type='checkbox'
                                           onClick={() => { if(opinion === 0) {
                                            opinion = 1;
                                            console.log('Opinion:', opinion);
                                        } else {
                                            opinion = 0;
                                            console.log('Opinion:', opinion);
                                        }}} />
                        <Form.Check inline label="Entertainment" 
                                           name="entertainment" 
                                           type='checkbox'
                                           onClick={() => { if(entertainment === 0) {
                                            entertainment = 1;
                                            console.log('Entertainment:', entertainment);
                                        } else {
                                            entertainment = 0;
                                            console.log('Entertainment:', entertainment);
                                        }}} />
                    </Form.Group>
                    <Form.Group className="Blog-Text">
                        <Form.Control as='textarea'
                                      size='lg'
                                      placeholder='5000 characters... '
                                      name='blogContent'
                                      onChange={event => blogContent = event.target.value} 
                                      rows={6}/>
                    </Form.Group>
                    <Button type='submit' variant='info' size='lg'>Create Post</Button>
                </Form>
                <div className='Profile-Link'>
                    <Router>
                        <Link to='/'
                            onClick={() => {
                                this.props.blogpost();

                            }}>Back to Profile</Link>
                    </Router>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogpost: state.blogpost,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        blogpost: () => dispatch({ type: 'BLOG_POST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogPost);