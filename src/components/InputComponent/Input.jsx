/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { guessWord } from '../../actions';

/**
 * @function mapStateToProps
 * @param {*} state - has the state of the entire application.
 */
const mapStateToProps = ({ success }) => ({ success });

class InputComp extends Component {
  render() {
    const { success } = this.props;
    const contents = success ? null : (
      <form
        action=""
        data-test="component-form-container"
        className="form-horizontal"
      >
        <input
          type="text"
          data-test="component-input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter your guess"
        />
        <button
          type="submit"
          data-test="component-submit-button"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}
InputComp.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { guessWord })(InputComp);
