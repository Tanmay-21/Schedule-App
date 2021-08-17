import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions';
import LoginPage from './pages/LoginPage';
import TablePage from './pages/TablePage';
import LoadingTablePage from './pages/LoadingTablePage';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  } 

  render() {
    return (
      <div className="App">
        <Router>
          <main>
            {this.props.auth === null || this.props.auth === false || this.props.auth === {} 
            ? this.props.auth === null ? (
              <Switch>
                <Route exact path="/Loading" component={LoadingTablePage} />
                <Redirect to="/Loading" />  
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/Login" component={LoginPage} />
                <Redirect to="/Login" />  
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/Table" component={TablePage} />
                <Redirect to="/Table" />
              </Switch>
            )}
          </main>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(App);
