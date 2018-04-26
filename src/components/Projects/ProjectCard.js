import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  ButtonDropdown,
  DropdownItem,
  CardBody,
  CardImg,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import './ProjectCard.css';

class ProjectCard extends Component {
  state = {
    dropdownOpen: false,
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
  <Col xs='12' md='4' className='ProjectCard__Container'>
    <Card className="ProjectCard" shadow={5}>
      <CardImg className='ProjectCard__Img' 
      src={this.props.project.img_url} alt={this.props.project.title} />
      <CardBody>
        <CardTitle className='ProjectCard__Title'>{this.props.project.title}</CardTitle>
        <CardText className = 'ProjectCard__Text'>
            {this.props.project.description}
        </CardText>
      </CardBody>
    </Card>
    <ButtonDropdown className='ProjectCard__Dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
      <DropdownToggle caret color="secondary">
        Check it out!
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => window.open(this.props.project.github)}>
          GitHub
        </DropdownItem>
        <DropdownItem onClick={() => window.open(this.props.project.demo)}>
          Live Demo
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </Col>
    );
  }
}

export default ProjectCard;