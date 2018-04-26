import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import firebase from '../../firebase';

class AddProject extends Component {
  state = {
    title: '',
    description: '',
    img_url: '',
    github: '',
    codepen: '',
    demo: '',
  }
  render() {
    return (
      <Form onSubmit={() => this.handleSubmit()}>
        <Input name='title' placeholder='title' onChange={this.handleChange.bind(this)}/>
        <Input name='description' placeholder='description' onChange={this.handleChange.bind(this)}/>
        <Input name='img_url' placeholder='image url' onChange={this.handleChange.bind(this)}/>
        <Input name='github' placeholder='github' onChange={this.handleChange.bind(this)}/>
        <Input name='codepen' placeholder='codepen' onChange={this.handleChange.bind(this)}/>
        <Input name='demo' placeholder='live demo' onChange={this.handleChange.bind(this)}/>
        <Input type="submit"/>
      </Form>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
}

  handleSubmit() {
    const itemsRef = firebase.database().ref('poop');
    const item = { ...this.state }
    console.log(item);
    itemsRef.push(item);
  }
}

export default AddProject;
