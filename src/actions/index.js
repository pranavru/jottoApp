const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};
/**
 * Returns Redux Thunk function that dispatched GUESS_WORD action
 * It also launches CORRECT_GUESS action conditionally, if the secret word is guessed
 * @function guessWord
 * @param  {string} guessedWord
 * @returns {function} - Redux Thunk dispatcher function.
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {

  };
};

/**
 * @function
 */
export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

export default actionTypes;
