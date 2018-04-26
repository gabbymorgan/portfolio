import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input } from 'reactstrap';

class AddProject extends Component {
  state = {}
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
    console.log(this.state);
  }

  handleSubmit() {
    axios
      .post('https://portfolio-aa4f9.firebaseio.com/projects', this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
}

export default AddProject;
