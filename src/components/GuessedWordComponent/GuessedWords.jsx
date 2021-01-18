/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const GuessedWord = ({ guessedWords }) => {
  let content;
  if (guessedWords.length === 0) {
    content = (
      <p data-test="guessed-word-instruction">
        Try to guess the secret word!
      </p>
    );
  } else {
    const guessedWordsRow = guessedWords.map(
      ({ guessedWord, letterMatchCount }, index) => (
        <tr data-test="guessed-word" key={guessedWord}>
          <td>{index + 1}</td>
          <td>{guessedWord}</td>
          <td>{letterMatchCount}</td>
        </tr>
      ),
    );

    content = (
      <div data-test="guessed-words-table" className="container">
        <h2>Guessed Words</h2>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRow}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      {content}
      <div data-test="guessed-words-count">
        {`Total guessed words: ${guessedWords.length}`}
      </div>
    </div>
  );
};
GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ),
};

export default GuessedWord;
