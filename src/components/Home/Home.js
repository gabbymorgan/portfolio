import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Home.css';

class Home extends Component {
    state = {
      browser: '',
    }

    render() {
      return(
          <Container className='Content Home'>
            <Row  className='Home__Avatar'>
              <Col xs='8' className='Home__Avatar__Col'>
                <img alt='Avatar' className={`Avatar__img--${this.state.browser}`}
                src='https://scontent-dfw5-1.cdninstagram.com/vp/93e760a68ead143aba6217c1cb67b8de/5B504878/t51.2885-15/e35/11374195_992679550796225_496538000_n.jpg'
                />
              </Col>
            </Row>
            <Row className='Home__Title'>
              <Col xs='12' md='10' xl='6'>
                  <h1>Hi, i'm William.</h1>
                  <p>I like food. Please hire me.</p>
                  <hr/>
                  <p>HTML/CSS | JavaScript | React | Redux | NodeJS | Linux | Python</p>
              </Col>
            </Row>
            <Row className='Home__Social'>
              {/* Github */}
                <a href='https://github.com/runranron/portfolio-website-1' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-github-square' aria-hidden='true' /></a>

                  {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/william-pelton-49b60921/' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' /></a>
            </Row>
          </Container>
      )
    }

    componentDidMount() {
      this.setState({

      })
    }
}


export default Home;
