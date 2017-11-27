import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Root extends Component {
  render() {
    return (   
      <MuiThemeProvider>
        <Router>
          <App /> 
        </Router>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object
};
