import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, Form, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import "./custom.css";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
          
        <Navbar className="bg-nav" expand="lg">
  <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default Header;