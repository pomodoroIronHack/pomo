import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import {Route} from "react-router-dom"
export default class App extends React.Component {
  state = {
    user: this.props.user
  }
   setUser = user => {
    this.setState({
      user: user
    })
  }
  render(){
    return (
      <div className="App">
       <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
 
}

