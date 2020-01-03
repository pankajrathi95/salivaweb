import React, { Component } from "react";
import { Input, Button } from "@rebass/forms";
import { Heading, Text } from "rebass";
import { Flex, Box } from "reflexbox";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./../components/Home";
import Login from "./../components/Login";
import Register from "./../components/Register";
import Dashboard from "./../components/Dashboard";
import ProtectedRoute from "./../components/ProtectedRoute";
import LogOut from "./../components/Logout";
class Navigation extends Component {
  render() {
    return (
      //   <Navbar bg="light" expand="lg">
      //     <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav classNameName="mr-auto">
      //         <Nav.Link to="#home">Home</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">
              Drugs admin
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {this.props.authenticated ? (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <LogOut />
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
          {/* <NavLink to="/">Home</NavLink>
          {this.props.authenticated ? (
            <span>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <LogOut />
            </span>
          ) : (
            <span>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </span>
          )} */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              authenticated={this.props.authenticated}
              path="/login"
              component={Login}
            />
            <Route path="/register" component={Register} />
            <ProtectedRoute
              authenticated={this.props.authenticated}
              path="/dashboard"
              component={Dashboard}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
