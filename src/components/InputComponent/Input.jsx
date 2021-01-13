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

export class UnconnectedInputComp extends Component {
  render() {
    // eslint-disable-next-line no-shadow
    const { success, guessWord } = this.props;
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
          onClick={() => guessWord('Party')}
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
UnconnectedInputComp.propTypes = {
  success: PropTypes.bool,
  guessWord: PropTypes.func,
};
UnconnectedInputComp.defaultProps = {
  success: false,
  guessWord: () => { },
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInputComp);
