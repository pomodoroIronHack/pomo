import React, { Component } from 'react';
import { Form, Button, Alert, Navbar } from 'react-bootstrap';
import { login } from '../services/auth';
import NavBar from './Navbar'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = event => {
    console.log(event.target.name)
    console.log(event.target.value)
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push('/lists');
      }
    });
  };

  render() {
    return (
      <>
      <Navbar/>
        <h2>TOMATO</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='username' className="login" > </Form.Label>
            <Form.Control className="log"
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'> </Form.Label>
            <Form.Control className="log"
              type='password'
              name='password'
              value={this.state.password}
              onChange={(e)=>this.handleChange(e)}
              id='password'
              placeholder="Password"
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <Button type='submit'>Login</Button>
        </Form>
      <Navbar/>
      </>
    );
  }
}