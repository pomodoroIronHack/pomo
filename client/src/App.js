// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Signup from './components/Signup'
// import {Route} from "react-router-dom"
// export default class App extends React.Component {
//   state = {
//     user: this.props.user
//   }
//    setUser = user => {
//     this.setState({
//       user: user
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//        <Route
//           exact
//           path='/signup'
//           render={props => <Signup setUser={this.setUser} {...props} />}
//         />
//       </div>
//     );
//   }
 
// }

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
 import Projects from './components/List';
import Navbar from './components/Navbar';
import List from './components/List';
// import TaskDetails from './components/TaskDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FixedNavBar from './components/FixedNavbar'


class App extends Component {
  state = {
    user: this.props.user
  }
  setUser = user => {
    this.setState({
      user: user
    })
  }
  render() {
    return (
      <div className="App" >
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Route
          exact
          path='/lists'
          // component={Lists}
          render={props => {
            if (this.state.user) return <List {...props} />
            else return <Redirect to='/' />
          }}
        />
        <ProtectedRoute
          exact
          path='/lists'
          // this is an additional prop that is taken care of with ...rest
          foo='bar'
          user={this.state.user}
          component={List}
        /> 
        <Route
          exact
          path='/lists/:id'
          render={props => <List user={this.state.user} {...props} />}
        />
         {/* <Route
          exact
          path='/fixednavBar'
          render={props => <FixedNavBar user={this.state.user} {...props} />}
        /> */}
        <Route
          exact
          path='/tasks/:id'
          // component={TaskDetails}
        />
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}
export default App;

















