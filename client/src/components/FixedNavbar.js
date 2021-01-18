import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import * as Icon from "react-feather";
import { logout } from "../services/auth";

export default class FixedNavbar extends Component {
  state = {
    button: "countdown",
  };
  // console.log('this is the prop outside the function', this.props)
  handleLogout = () => {
    logout().then((logoutResponse) => {
      console.log("this is the prop", logoutResponse);
      this.props.setUser(null);
    });
  };

  handleClick(value) {
    this.setState({
      button: value,
    });
  }
  // console.log("this.props ", this.props)
  render() {
    return (
      
      <Nav className="nav bottom-nav" fixed="bottom">
        <Nav.Brand>
          <Link
            to="/countdown"
            className="bottom-nav-icons"
            onClick={() => this.handleClick("countdown")}
          >
            {this.state.button === "countdown" ? (
              <Icon.Clock
                style={{ fill: "white", stroke: "tomato" }}
                size={92}
              />
            ) : (
              <Icon.Clock
                style={{ fill: "#ff63479d", stroke: "white" }}
                size={92}
              />
            )}
            {/* <span className="bottom-nav-icon-links">Count</span> */}
          </Link>
          
        </Nav.Brand>
        
        <Nav.Brand>
          <Link
            to="/lists"
            className="bottom-nav-icons"
            onClick={() => this.handleClick("lists")}
          >
            {this.state.button === "lists" ? (
              <Icon.FileText
                style={{ fill: "white", stroke: "tomato" }}
                size={92}
              />
            ) : (
              <Icon.FileText
                style={{ fill: "#ff63479d", stroke: "white" }}
                size={92}
              />
            )}
            {/* <span className="bottom-nav-icon-links">Plan</span> */}
          </Link>
        </Nav.Brand>

        {/* <Nav.Brand>
          <Link
            to="/settings"
            className="bottom-nav-icons"
            onClick={() => this.handleClick("settings")}
          >
            {this.state.button === "settings" ? (
              <Icon.Settings
                style={{ fill: "tomato", stroke: "black" }}
                size={50}
              />
            ) : (
              <Icon.Settings
                style={{ fill: "gray", stroke: "black" }}
                size={50}
              />
            )}
          </Link>
        </Nav.Brand> */}

        <Nav.Brand>
          <Link
            to="/"
            onClick={() => this.handleLogout(this.props)}
            className="bottom-nav-icons"
          >
            <Icon.ArrowRightCircle size={92} style={{ fill: "#ff63479d", stroke: "white" }} />
            {/* <span className="bottom-nav-icon-links">Logout</span> */}
          </Link>
        </Nav.Brand>
      </Nav>
      
  
     
    );
  }
}
