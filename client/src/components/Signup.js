import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/auth";
import "bootstrap/dist/css/bootstrap.css";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then((data) => {
      console.log("does it get here");
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/countdown");
      }
    });
  };
  render() {
    return (
      <>
        <div className="login-container">
          <h2 className="logo">Tomato</h2>
          <p className="p">
            Sign up to create new tasks for your Pomodoro timer
          </p>
          <div className="signup-page">
            <Button href="/" className="log-btn">
              Back to Login
            </Button>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="input-field">
                <Form.Label htmlFor="username"></Form.Label>
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
              <Form.Group className="input-field">
                <Form.Label htmlFor="password"></Form.Label>
                <Form.Control
                  className="log"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                  placeholder="Password"
                />
              </Form.Group>
              {this.state.message && (
                <Alert variant="danger">{this.state.message}</Alert>
              )}
              <Button type="submit" className="log-btn">
                Sign up
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
