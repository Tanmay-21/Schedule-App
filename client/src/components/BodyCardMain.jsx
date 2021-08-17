import React, { Component, Fragment } from "react";
import { Card, Modal, Button, Form, Col, Row } from "react-bootstrap";

import "../assets/styles/BodyCardMain.css";

class BodyCardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      isHovered: false,
    };
    this.setModalOpen = this.setModalOpen.bind(this);
    this.setModalClose = this.setModalClose.bind(this);
    this.setHoverStart = this.setHoverStart.bind(this);
    this.setHoverEnd = this.setHoverEnd.bind(this);
  }

  setModalOpen = () => {
    this.setState({ modalShow: true });
  }

  setModalClose = () => {
    this.setState({ modalShow: false });
  }

  setHoverStart = () => {
    this.setState({ isHovered: true });
  }

  setHoverEnd = () => {
    this.setState({ isHovered: false });
  }

  render() {
    return (
      <Fragment>
        <Card
          className="main-card-body"
          onClick={this.setModalOpen}
          onMouseEnter={this.setHoverStart}
          onMouseLeave={this.setHoverEnd}
        >
          <Card.Body>
            {this.state.isHovered ? (
              <Card.Title>
                <Button onClick={this.setModalOpen} className="main-card-btn">
                  Add Class
                </Button>
              </Card.Title>
            ) : (
              <Card.Title>{this.props.title}</Card.Title>
            )}
          </Card.Body>
        </Card>
        <Modal
          show={this.state.modalShow}
          onHide={this.setModalClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.setModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.setModalClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default BodyCardMain;
