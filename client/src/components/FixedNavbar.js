import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import '../App.css';
import * as Icon from "react-feather";
import { logout } from '../services/auth';

export default function FixedNavbar(props) {
  // console.log('this is the prop outside the function', props)
  const handleLogout = () => {
    logout().then((logoutResponse) => {
      console.log('this is the prop', logoutResponse)
      props.setUser(null);
    });
  }
  // console.log("props ", props)
  return (
    <Nav className='nav bottom-nav justify-content-center' fixed="bottom">
      <Nav.Brand>
        <Link to="/countdown" className="bottom-nav-icons">
          <Icon.Clock />
        </Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/lists" className="bottom-nav-icons">
          <Icon.FileText />
        </Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to='/login' onClick={() => handleLogout(props)} className="bottom-nav-icons" >
          <Icon.ArrowRightCircle />
        </Link>
      </Nav.Brand>
    </Nav>
  )
}