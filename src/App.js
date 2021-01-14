/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Congrats from './components/CongratsComponent/Congrats';
import GuessedWord from './components/GuessedWordComponent/GuessedWords';
import InputComp from './components/InputComponent/Input';

import './App.css';
import { getSecretWord } from './actions';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;
    return (
      <div className="App">
        <h1>Jotto</h1>
        {secretWord && !success
          ? (
            <code>
              {`The secret word has length of ${secretWord.length}`}
            </code>
          )
          : <></>}
        <Congrats success={success} />
        <br />
        <InputComp />
        <GuessedWord guessedWords={guessedWords} />
      </div>
    );
  }
}

UnconnectedApp.propTypes = {
  success: PropTypes.bool,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }),
  ),
  getSecretWord: PropTypes.func,
  secretWord: PropTypes.string,
};
UnconnectedApp.defaultProps = {
  success: false,
  guessedWords: [{ guessWord: 'train', letterMatchCount: 3 }],
  getSecretWord: () => { },
  secretWord: 'Party',
};
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
