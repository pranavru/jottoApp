/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Congrats from './components/CongratsComponent/Congrats';
import GuessedWord from './components/GuessedWordComponent/GuessedWords';
import InputComp from './components/InputComponent/Input';

import './App.css';
import { getSecretWord, reloadWebPage } from './actions';
import GiveUp from './components/GiveUpButtonComponent/GiveUp';
import NewWordButton from './components/NewWordComponent/NewWord';
import SecretWordLength from './components/SecretWordLength/SecretWordLength';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  render() {
    const {
      // eslint-disable-next-line no-shadow
      success, guessedWords, secretWord, reloadWebPage, giveUpGuess,
    } = this.props;
    const contents = (
      <>
        {secretWord
          && (
            <SecretWordLength
              secretWord={secretWord}
              success={success}
              giveUpGuess={giveUpGuess}
            />
          )}
        <Congrats success={success} />
        <GiveUp giveUpGuess={giveUpGuess} secretWord={secretWord} />
        <div className="mt-3 mb-3">
          <NewWordButton display={success || giveUpGuess} reloadWebPage={reloadWebPage} />
        </div>
        <InputComp />
        <GuessedWord guessedWords={guessedWords} />
      </>
    );
    return (
      <div className="App">
        <h1>Jotto</h1>
        {contents}
      </div>
    );
  }
}

UnconnectedApp.propTypes = {
  success: PropTypes.bool,
  giveUpGuess: PropTypes.bool,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }),
  ),
  getSecretWord: PropTypes.func,
  reloadWebPage: PropTypes.func,
  secretWord: PropTypes.string,
};
UnconnectedApp.defaultProps = {
  success: false,
  giveUpGuess: false,
  guessedWords: [{ guessWord: 'train', letterMatchCount: 3 }],
  reloadWebPage: () => { },
  getSecretWord: () => { },
  secretWord: 'Party',
};
const mapStateToProps = (state) => {
  const {
    success, guessedWords, secretWord, giveUpGuess,
  } = state;
  return {
    success, guessedWords, secretWord, giveUpGuess,
  };
};

const actions = {
  getSecretWord,
  reloadWebPage,
};
export default connect(mapStateToProps, actions)(UnconnectedApp);
