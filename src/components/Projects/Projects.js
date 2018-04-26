import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

import ProjectCard from './ProjectCard';
import './Projects.css';


class Projects extends Component {
    state = {
      projects: []
    }

    render() {
      return(
        <Col xs='12' className='Content Project'>
          <Row className='Home__Title'>
            <Col className='Project__Title'>
              <h1>Projects</h1>
              <h4>These are things that I have done.</h4>
            </Col>
          </Row>
          <Row>
            {this.state.projects.map((project, index) => {
              return <ProjectCard key={index} project={project}/>
            })}
          </Row>
      </Col>
      )
    }

    componentDidMount() {
      axios
        .get('https://portfolio-aa4f9.firebaseio.com/projects.json')
        .then(response => {
          this.setState({
            projects: response.data.filter(project => project !== null),
          })
        }).catch(err => console.log(err));
    }
}


export default Projects;
