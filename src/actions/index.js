import axios from 'axios';

import { getLetterMatchCount } from '../helpers/index';

const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * Returns Redux Thunk function that dispatched GUESS_WORD action
 * It also launches CORRECT_GUESS action conditionally, if the secret word is guessed
 * @function guessWord
 * @param  {string} guessedWord
 * @returns {function} - Redux Thunk dispatcher function.
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const guessedLettersCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount: guessedLettersCount },
  });
  if (secretWord.length === guessedLettersCount) {
    dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
  }
};

// Mock axios request to get a random secret word from the server
export const getSecretWord = () => (dispatch) => axios.get('http://localhost:3030/')
  .then((response) => {
    dispatch(
      {
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data || 'Party',
      },
    );
  });

/**
 * @function
 */
export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

export default actionTypes;

/**
 *
 */
