import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordReducer';
import secretWord from './secretWordReducer';
import giveUpGuess from './giveupGuessReducer';
import userInput from './userEnteredSecretWordReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  giveUpGuess,
  userInput,
});
