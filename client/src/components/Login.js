import React, { Component } from "react";
import { Form, Button, Alert, Navbar } from "react-bootstrap";
import { login } from "../services/auth";
// import Navbar from './Navbar'

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/countdown");
      }
    });
  };

  render() {
    return (
      <>
        <div className="login-container">
          <h2 className="logo">Tomatoooo</h2>
          <Form className="boxes" onSubmit={this.handleSubmit}>
            <Form.Group className="input-field">
              <Form.Label htmlFor="username" className="login">
                {" "}
              </Form.Label>
              <Form.Control
                className="log"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                id="username"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="input-field boxes-two">
              <Form.Label htmlFor="password"> </Form.Label>
              <Form.Control
                className="log"
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            {this.state.message && (
              <Alert variant="danger">{this.state.message}</Alert>
            )}
            <Button type="submit" className="log-btn">
              Login
            </Button>
          </Form>
          <Navbar />
        </div>
      </>
    );
  }
}
