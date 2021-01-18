import { bool, string } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import NewWordButton from '../NewWordComponent/NewWord';

const GiveUp = ({ secretWord, giveUpGuess }) => {
  const contents = giveUpGuess ? (
    <div data-test="button-give-up-button" className="container">
      <span data-test="message-give-up-button" className="alert alert-danger">
        {`The secret word was ${secretWord}\nBetter luck next time!`}
      </span>
      <div className="mt-3">
        <NewWordButton success />
      </div>
    </div>
  ) : (
    <div data-test="button-give-up-button" />
  );
  return (
    <div data-test="component-give-up-button">
      {contents}
    </div>
  );
};
GiveUp.propTypes = {
  secretWord: string,
  giveUpGuess: bool,
};
GiveUp.defaultProps = {
  secretWord: 'Party',
  giveUpGuess: false,
};

const mapStateToProps = ({ secretWord, giveUpGuess }) => ({ secretWord, giveUpGuess });

export default connect(mapStateToProps, {})(GiveUp);
