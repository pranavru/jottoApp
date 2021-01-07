import React from "react";
import PropTypes from "prop-types";

const GuessedWord = ({ guessedWords }) => {
  let content;
  if (guessedWords.length === 0) {
    content = (
      <p data-test="guessed-word-instruction">
        Try to guess the secret word!
      </p>
    );
  } else {
    content = (<></>);
  }
  return (
    <div data-test="component-guessed-words">
      {content}
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
GuessedWord.defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 0,
    },
  ],
};

export default GuessedWord;
