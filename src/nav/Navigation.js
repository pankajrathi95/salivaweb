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

import Home from "./../components/Home";
import Login from "./../components/Login";
import Register from "./../components/Register";
import Drug from "./../components/Drug";
import ProtectedRoute from "./../components/ProtectedRoute";
import LogOut from "./../components/Logout";
import NewDrug from "./../components/New-Drug";
class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="#">
              Drugs admin
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              {this.props.authenticated ? (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/drug">
                      Drugs
                    </NavLink>
                  </li>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <LogOut />
                    </li>
                  </ul>
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
              exact
              path="/drug/new"
              component={NewDrug}
            />
            <ProtectedRoute
              authenticated={this.props.authenticated}
              exact
              path="/drug"
              component={Drug}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
