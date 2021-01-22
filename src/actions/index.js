/* eslint-disable no-console */
import axios from 'axios';

import { getLetterMatchCount } from '../helpers/index';

const actionTypes = {
  RESET_GAME: 'RESET_GAME',
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  GIVEUP_GUESS: 'GIVEUP_GUESS',
  USER_IS_ENTERING: 'USER_IS_ENTERING',
  USER_ENTERED: 'USER_ENTERED',
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

/**
 * It makes an API call to the local web server which returns the new secret word.
 * If no secret word is returned and response.data is "" then default value is set as "Party".
 * @function loadSecretWord
 * @param {*} dispatch - Redux thunk dispatcher object function
 * @returns {object} - Redux thunk dispatch function
 */
const loadSecretWord = (dispatch) => axios.get('http://localhost:3030/')
  .then((response) => {
    dispatch(
      {
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data || 'Party',
      },
    );
  });

// Axios request to get a random secret word from the server
export const getSecretWord = () => loadSecretWord;

/**
 * It sets the success props to true when the correct guess is made.
 * @function correctGuess
 * @returns {object} - Redux thunk dispatch function
 */
export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

/**
 * It resets the application with a new secret word to guess.
 * It sets the success status to false leaving the guessedWords as it is.
 * Alternatively: It can also be approached with reloading the whole website.
 *  by returning window.location.reload.
 * @function loadSecretWord
 * @param {*} dispatch - Redux thunk dispatcher object function
 * @returns {object} - Redux thunk dispatch function
 */
export const reloadWebPage = () => (dispatch) => {
  dispatch({ type: actionTypes.RESET_GAME });
  return loadSecretWord(dispatch);
};

export const giveUpGuess = () => (dispatch) => {
  dispatch({ type: actionTypes.GIVEUP_GUESS });
  return loadSecretWord(dispatch);
};

export const setUserEnteredSecretWord = (secretWord) => (dispatch) => {
  dispatch({ type: actionTypes.SET_SECRET_WORD, payload: secretWord });
  dispatch({ type: actionTypes.USER_ENTERED });
};

export default actionTypes;
