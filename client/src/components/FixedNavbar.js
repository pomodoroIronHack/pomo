import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import '/Users/annaweingart/Desktop/pomo/client/src/App.css';
import * as Icon from "react-feather";

import { logout } from '../services/auth';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
}


export default function FixedNavbar(props) {

  return (

    <Nav className = 'nav bottom-nav justify-content-center' fixed="bottom">

      <Nav.Brand>
        <Link to="/countdown" className = "bottom-nav-icons">
          <Icon.Clock/>
        </Link>
      </Nav.Brand>

      <Nav.Brand>
        <Link to="/lists" className = "bottom-nav-icons">
          <Icon.FileText/>
        </Link>
      </Nav.Brand>

      <Nav.Brand>
        <Link to="/login" className = "bottom-nav-icons" onClick={() => handleLogout(props)}>
          <Icon.ArrowRightCircle/>
        </Link>
      </Nav.Brand>

    </Nav>
  )
}