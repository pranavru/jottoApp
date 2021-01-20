import React from 'react';
import { bool, string } from 'prop-types';

const SecretWordLength = ({ secretWord, success, giveUpGuess }) => {
  const contents = (
    <code data-test="message-secret-word-length">
      {`The secret word has length of ${secretWord.length}`}
    </code>
  );
  return (
    <div data-test="component-secret-word-length">
      {(secretWord && !success && !giveUpGuess)
        ? contents
        : <></>}
    </div>
  );
};

SecretWordLength.propTypes = {
  secretWord: string,
  success: bool,
  giveUpGuess: bool,
};
SecretWordLength.defaultProps = {
  secretWord: 'Party',
  success: false,
  giveUpGuess: false,
};
export default SecretWordLength;
