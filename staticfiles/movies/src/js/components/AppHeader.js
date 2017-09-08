import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar } from 'react-bootstrap';


class AppHeader extends Component {


  render() {

  return(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">NexusTrip</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>

  );
  }
  }

export default AppHeader;

