/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * @function mapStateToProps
 * @param {*} state - has the state of the entire application.
 */
const mapStateToProps = (state) => null;

class InputComp extends Component {
  render() {
    return (
      <div className="container" />
    );
  }
}

export default connect(mapStateToProps)(InputComp);
