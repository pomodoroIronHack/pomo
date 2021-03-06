import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Projects from "./components/List";
import List from "./components/List";
// import TaskDetails from './components/TaskDetails';
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FixedNavBar from "./components/FixedNavbar";
import SimpleCountdownTimer from "./components/Countdown";
import Switch from "react-bootstrap/esm/Switch";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Animated from "./components/Animated"

class App extends Component {
  state = {
    user: this.props.user,
  };
  setUser = (userName) => {
    this.setState({
      user: userName,
    });
  };
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Navbar user={this.state.user} setUser={this.setUser} /> */}
          <Route
            exact
            path="/lists"
            // component={Lists}
            render={(props) => {
              if (this.state.user) return <List {...props} />;
              else return <Redirect to="/" />;
            }}
          />
          {/* <ProtectedRoute
            exact
            path="/lists"
            // this is an additional prop that is taken care of with ...rest
            foo="bar"
            user={this.state.user}
            component={List}
          /> */}
          {/* <Route
          exact
          path='/lists/:id'
          render={props => <List user={this.state.user}{...props} />}
        /> */}
          <Route
            exact
            path="/tasks/:id"
            // component={TaskDetails}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Login setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Navbar setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/countdown"
            render={(props) => (
              <SimpleCountdownTimer user={this.state.user} {...props} />
            )}
          />

            <Route
            exact
            path="/settings"
            render={(props) => (
              <Animated user={this.state.user} {...props} />
            )}
          />



         
        </Switch>
        {this.state.user && (
          <FixedNavBar user={this.state.user} setUser={this.setUser} />
        )}
      </div>
    );
  }
}
export default App;
