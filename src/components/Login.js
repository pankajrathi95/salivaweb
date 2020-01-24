import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input } from "@rebass/forms";
import { Heading, Text, Button } from "rebass";
import { Flex, Box } from "reflexbox";
import firebase from "./../firebase";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <Box
        sx={{
          maxWidth: 512,
          mx: "auto",
          marginTop: "100px",
          px: 6
        }}
      >
        <Flex>
          <Box
            sx={{
              mx: "10px"
            }}
          >
            <Heading fontWeight="700">Log In</Heading>
          </Box>
        </Flex>
        {error ? (
          <Flex>
            <Box>
              <Text>{error.message}</Text>
            </Box>
          </Flex>
        ) : null}
        <Flex>
          <Box marginTop="40px">
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleInputChange}
                marginTop="10px"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
                marginTop="10px"
              />
              <Button
                children="Log In"
                marginTop="10px"
                backgroundColor="red"
              />
            </form>
          </Box>
        </Flex>
      </Box>
    );
  }
}
export default withRouter(Login);
