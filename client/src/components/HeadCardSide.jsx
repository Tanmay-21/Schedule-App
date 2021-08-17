import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import '../assets/styles/HeadCardSide.css';

class HeadCardSide extends Component {
  render() {
    return (
      <Card className="side-card">
        <Card.Body>
          <Card.Text>{this.props.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HeadCardSide;