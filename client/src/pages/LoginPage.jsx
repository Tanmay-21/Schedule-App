import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";

import * as actions from "../actions";

class LoginPage extends Component {
  render() {
    return (
      <Container fluid>
        <Button variant="danger" href="/api/user/auth/google">
          Login with Google
        </Button>
        <div>this is Login Page</div>
      </Container>
    );
  }
}

export default connect(null, actions)(LoginPage);
