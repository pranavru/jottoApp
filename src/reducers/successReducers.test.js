/* eslint-disable no-undef */
import actionTypes from '../actions';
import successReducer from './successReducer';

describe('Success Reducer Tests', () => {
  test('should return default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test('should return state of true on receiving action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
