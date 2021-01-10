const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

/**
 * @function
 */
export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

export default actionTypes;
