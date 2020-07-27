import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { logout } from '../services/auth';



export default function Navbar(props) {
  return (
    <Nav className='nav justify-content-center' fixed='bottom' bg='white'>
      Don't have an account?&nbsp; <Link to='/signup'> Sign up</Link> 
    </Nav>
  )
}