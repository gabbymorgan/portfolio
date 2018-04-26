import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import AddProject from '../Projects/AddProject';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path='/addproject' component={AddProject} />
  </Switch>
)

export default Main;
