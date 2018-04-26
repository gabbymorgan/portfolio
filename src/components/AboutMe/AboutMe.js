import React, { Component } from 'react';
import {
  Container,
  Row,
} from 'reactstrap';
import InstagramEmbed from 'react-instagram-embed';

import './AboutMe.css';


class About extends Component {
    render() {
      return(
        <Container className="Content AboutMe">
        <Row className='AboutMe__IG-Embed'>
          <InstagramEmbed
            url='https://www.instagram.com/p/Bd52OwTFcw3/'
            maxWidth={500}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </Row>
      </Container>
      )
  }
}


export default About;
