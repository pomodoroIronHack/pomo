import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import * as Icon from "react-feather";
import { logout } from "../services/auth";

export default function Listnav (props) {
  return (
    <Nav className="nav justify-content-center signup-nav" fixed="top">
      Don't have an account?&nbsp;{" "}
      <Link to="/signup" className="sign-up-btn">
        Sign up
      </Link>
    </Nav>
  );
}
