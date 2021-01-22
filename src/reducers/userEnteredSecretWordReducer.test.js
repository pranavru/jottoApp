/* eslint-disable no-undef */
import actionTypes, { } from '../actions';
import userInput from './userEnteredSecretWordReducer';

describe('User Secret Word Input Test', () => {
  test('should return default state when no action is passed', () => {
    const newState = userInput(undefined, {});
    expect(newState).toBe(null);
  });
  test('should return state as "entered" when the USER_ENTERED action type is passed', () => {
    const newState = userInput(undefined, { type: actionTypes.USER_ENTERED });
    expect(newState).toBe('entered');
  });
  test('should return state as "is_entering" when the USER_IS_ENTERING action type is passed', () => {
    const newState = userInput(undefined, { type: actionTypes.USER_IS_ENTERING });
    expect(newState).toBe('is_entering');
  });
  test('should return state as null when RESET_GAME action type is passed', () => {
    const newState = userInput(undefined, { type: actionTypes.RESET_GAME });
    expect(newState).toBeNull();
  });
});
