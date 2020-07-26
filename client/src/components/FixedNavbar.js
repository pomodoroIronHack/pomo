// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
// import { Navbar as Nav } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';



// export default class FixedNavBar extends Component {

//   render() {
//     return(
// <>
//   <Nav sticky='bottom' bg="dark" variant="dark">

//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
   
//   </Nav>
//   <br />
//   <Nav bg="primary" variant="dark">
 
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
 
//   </Nav>

//   <br />
//   <Nav bg="light" variant="light">

//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
   
//   </Nav>
// </>
//     )
//   }
// }

import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons


 import { faHome } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function FixedNavbar(props) {
  return (
    <Nav className='nav justify-content-center ' fixed="bottom"  bg='danger'>
      {props.user && <Nav.Brand>Welcome {props.user.username} </Nav.Brand>}
      <Nav.Brand>
      


        {/* <Link to='/'>Home</Link> */}
      </Nav.Brand>
      {props.user ? (
        <>
          <Nav.Brand>
            <Link to='/lists'>lists</Link>
          </Nav.Brand>
          <Nav.Brand>
            <Link to='/' >Logout</Link>
          </Nav.Brand>
        </>
      ) : (
        <>
          <Nav.Brand>
            <Link to='/signup'>
            &#128351;
          </Link>
           
          </Nav.Brand>
          <Nav.Brand>
          <Link to='/login'>
              Login
          </Link>
          </Nav.Brand>
          </>
        )}
    </Nav>
  )
}