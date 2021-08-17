import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../assets/styles/BodyCardSide.css";

class BodyCardSide extends Component {
  render() {
    return (
      <Card className="side-card-body">
        <Card.Body>
          <Card.Text className="side-card-body-text">{this.props.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default BodyCardSide;
