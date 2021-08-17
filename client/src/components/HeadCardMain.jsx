import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../assets/styles/HeadCardMain.css";

class HeadCardMain extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Text>{this.props.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HeadCardMain;
