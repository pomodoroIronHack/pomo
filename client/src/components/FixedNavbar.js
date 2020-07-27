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


import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react';
import '/Users/annaweingart/Desktop/pomo/client/src/App.css';



// import your icons


 import { faHome } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from './Logo.png';





export default function FixedNavbar(props) {
  return (

    <Nav className='nav justify-content-center' fixed="bottom"  bg='danger'>
     
      <Nav.Brand>
      <a href="/lists">


      
      {/* <img className='Nav-bottom' src={require('/Users/annaweingart/Desktop/pomo/client/src/components/ClockIcon.png')} 
        // onMouseOver={e => (e.currentTarget.src = {require("/Users/annaweingart/Desktop/pomo/client/src/components/Logo.png"))}
        onMouseOver={e => (e.currentTarget.src = {Logo})}
      /> */}
      </a>
        {/* <Link className="Nav-bottom-link" to="/lists"> */}
          {/* <img className='Nav-bottom' src={require('/Users/annaweingart/Desktop/pomo/client/src/components/ClockIcon.png')} /> */}
        {/* </Link> */}
      </Nav.Brand>
        
      <Nav.Brand>
        <Link to="/lists">
          <img className='Nav-bottom' src={require('/Users/annaweingart/Desktop/pomo/client/src/components/ListIcon.png')} />
        </Link>
      </Nav.Brand>

      <Nav.Brand>
        <Link to="/lists">
          <img className='Nav-bottom' src={require('/Users/annaweingart/Desktop/pomo/client/src/components/LogoutIcon.png')} />
        </Link>
      </Nav.Brand>


          
    </Nav>
  )
}