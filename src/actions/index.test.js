/* eslint-disable no-undef */
import actionTypes, { correctGuess } from './index';

describe('correctGuess() Method', () => {
  test('should return an action type with "CORRECT_GUESS" ', () => {
    const correctGuessAction = correctGuess();
    expect(correctGuessAction).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
