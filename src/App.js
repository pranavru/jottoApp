/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Congrats from './components/CongratsComponent/Congrats';
import GuessedWord from './components/GuessedWordComponent/GuessedWords';

import './App.css';
import { getSecretWord } from './actions';

class App extends React.Component {
  componentDidMount() {
    getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <br />
        <GuessedWord guessedWords={guessedWords} />
      </div>
    );
  }
}

App.propTypes = {
  success: PropTypes.bool,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    }),
  ),
};
App.defaultProps = {
  success: false,
  guessedWords: [{ guessWord: 'Party', letterMatchCount: 5 }],
};
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(mapStateToProps, { getSecretWord })(App);
