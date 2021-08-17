import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap';

import * as actions from '../actions';
import '../assets/styles/TablePage.css';
import HeadCardSide from '../components/HeadCardSide';
import HeadCardMain from '../components/HeadCardMain';
import BodyCardSide from '../components/BodyCardSide';
import BodyCardMain from '../components/BodyCardMain';

const Data = {
  Monday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
  Tuesday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
  Wednesday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
  Thursday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
  Friday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
  Saturday: {
    8: {
      data: null,
      isOccupied: false,
    },
    9: {
      data: null,
      isOccupied: false,
    },
    10: {
      data: null,
      isOccupied: false,
    },
    11: {
      data: null,
      isOccupied: false,
    },
    12: {
      data: null,
      isOccupied: false,
    },
    1: {
      data: null,
      isOccupied: false,
    },
    2: {
      data: null,
      isOccupied: false,
    },
    3: {
      data: null,
      isOccupied: false,
    },
    4: {
      data: null,
      isOccupied: false,
    },
    5: {
      data: null,
      isOccupied: false,
    },
  },
};

const Heads = [
  '8 Am : 9 Am',
  '9 Am : 10 Am',
  '10 Am : 11 Am',
  '11 Am : 12 Noon',
  '12 Noon : 1 Pm',
  '1 Pm : 2 Pm',
  '2 Pm : 3 Pm',
  '3 Pm : 4 Pm',
  '4 Pm : 5 Pm',
  '5 Pm : 6 Pm'
];

class TablePage extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Schedule-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <NavDropdown
                  title="Batch"
                  id="basic-nav-dropdown"
                  className="centered-dropdown"
                >
                  <NavDropdown.Item>P1</NavDropdown.Item>
                  <NavDropdown.Item>P2</NavDropdown.Item>
                  <NavDropdown.Item>P3</NavDropdown.Item>
                  <NavDropdown.Item>P4</NavDropdown.Item>
                  <NavDropdown.Item>P5</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item style={{ textAlign: "center" }}>
                    Add Batch
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Button variant="danger" onClick={this.props.logoutCurrentUser}>
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="head-title">
          <h2>Time Table</h2>
        </div>
        <Table responsive className="table-borderless">
          <thead>
            <tr>
              <th>
                <HeadCardSide title={'Days'} />
              </th>
              {Heads.map((title) => (
                <th>
                  <HeadCardMain title={title} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(Data).map((key) => (
              <tr>
                <td>
                  <BodyCardSide title={key} />
                </td>
                {Object.keys(Data[key]).map((key2) => (
                  <td>
                    <BodyCardMain title={'No Class'} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default connect(null, actions)(TablePage);
