import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'reactstrap';

import Routes from './components/Routes/Routes';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <Container className='Container'>
        <Row>
          <Nav/>
          <Routes/>
        </Row>
      </Container>
    );
  }
}

export default App;
