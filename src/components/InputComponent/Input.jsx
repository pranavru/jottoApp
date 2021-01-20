/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { giveUpGuess, guessWord } from '../../actions';

/**
 * @function mapStateToProps
 * @param {*} state - has the state of the entire application.
 */
const mapStateToProps = ({ success }) => ({ success });

export class UnconnectedInputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-shadow
    const { guessWord } = this.props;
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      guessWord(currentGuess);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { success, giveUpGuess } = this.props;
    const { currentGuess } = this.state;
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
          value={currentGuess}
          onChange={(event) => this.setState({ currentGuess: event.target.value })}
        />
        <button
          type="submit"
          data-test="component-submit-button"
          className="btn btn-primary mb-2"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          data-test="give-up-button"
          className="btn btn-danger ml-1 mb-2"
          onClick={giveUpGuess}
        >
          Give Up
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
  giveUpGuess: PropTypes.func,
};
UnconnectedInputComp.defaultProps = {
  success: false,
  guessWord: () => { },
  giveUpGuess: () => { },
};
const actions = {
  guessWord,
  giveUpGuess,
};
export default connect(mapStateToProps, actions)(UnconnectedInputComp);
