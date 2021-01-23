/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Congrats from './components/CongratsComponent/Congrats';
import GuessedWord from './components/GuessedWordComponent/GuessedWords';
import InputComp from './components/InputComponent/Input';

import GiveUp from './components/GiveUpButtonComponent/GiveUp';
import NewWordButton from './components/NewWordComponent/NewWord';
import SecretWordLength from './components/SecretWordLength/SecretWordLength';
import UserEntryButton from './components/UserEntersSecretWord/UserEntryButton/UserEntryButton';
import UserEntry from './components/UserEntersSecretWord/UserEntry';
import ErrorComponent, { } from './components/ErrorComponent/Error';

import './App.css';
import {
  getSecretWord, reloadWebPage, setUserEnteredSecretWord, setUserSecretWordEntering,
} from './actions';

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
      // eslint-disable-next-line no-shadow
      userInput, setUserEnteredSecretWord, setUserSecretWordEntering, serverError,
    } = this.props;
    const displayingSecretWordLength = secretWord
      && (
        <SecretWordLength
          secretWord={secretWord}
          success={success}
          giveUpGuess={giveUpGuess}
        />
      );
    let contents;
    if (serverError) {
      contents = <ErrorComponent />;
    } else {
      contents = userInput === 'is_entering'
        ? (<UserEntry formAction={setUserEnteredSecretWord} />)
        : (
          <>
            {displayingSecretWordLength}
            <Congrats success={success} />
            <GiveUp giveUpGuess={giveUpGuess} secretWord={secretWord} />
            <div className="mt-3 mb-3">
              <NewWordButton
                display={success || giveUpGuess}
                reloadWebPage={reloadWebPage}
              />
            </div>
            <InputComp />
            <GuessedWord guessedWords={guessedWords} />
            <UserEntryButton
              display={guessedWords.length === 0}
              userEntryBtnAction={setUserSecretWordEntering}
            />
          </>
        );
    }
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
  serverError: PropTypes.bool,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }),
  ),
  getSecretWord: PropTypes.func,
  reloadWebPage: PropTypes.func,
  setUserEnteredSecretWord: PropTypes.func,
  setUserSecretWordEntering: PropTypes.func,
  secretWord: PropTypes.string,
  userInput: PropTypes.string,
};
UnconnectedApp.defaultProps = {
  success: false,
  giveUpGuess: false,
  serverError: false,
  guessedWords: [{ guessWord: 'train', letterMatchCount: 3 }],
  reloadWebPage: () => { },
  setUserEnteredSecretWord: () => { },
  setUserSecretWordEntering: () => { },
  getSecretWord: () => { },
  secretWord: 'Party',
  userInput: null,
};
const mapStateToProps = (state) => {
  const {
    success, guessedWords, secretWord, giveUpGuess, userInput, serverError,
  } = state;
  return {
    success, guessedWords, secretWord, giveUpGuess, userInput, serverError,
  };
};

const actions = {
  getSecretWord,
  reloadWebPage,
  setUserEnteredSecretWord,
  setUserSecretWordEntering,
};
export default connect(mapStateToProps, actions)(UnconnectedApp);
