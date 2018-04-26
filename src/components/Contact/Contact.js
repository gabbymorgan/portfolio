import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

import './Contact.css';

class Contacts extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    render() {
        return(
            <Container className="Content Contact">
                <Row className='Home__Title'>
                    <Col>
                        <h1>Contact me</h1>
                        <h4>I'm easy to get a hold of.</h4>
                    </Col>
                </Row>
                <Row className='Contact__Form'>
                    <Col xs='12' md='8' lg='6'>
                    <Form method="POST" action="https://formspree.io/williamrpelton@gmail.com">
                        <Input type="email" name="email" className='Contact__email' placeholder="your email"/>
                        <Input type="textarea" name="message" className='Contact__Message'
                            placeholder='"Hello, my name is Bill Gates, and I would like to offer you a lot of food money for a job."'/>
                        <Button type="submit">Send</Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
    handleSubmit() {
        const url = 'http://formspree.io/williamrpelton@gmail.com';
        const req = new XMLHttpRequest();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("_replyto", this.state.email);
        formData.append("message", this.state.message);
        req.open('POST', url);
        console.log(formData)
        req.send(formData);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}


export default Contacts;