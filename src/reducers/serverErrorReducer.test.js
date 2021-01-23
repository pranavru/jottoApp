/* eslint-disable no-undef */
import actionTypes, { } from '../actions';
import serverErrorReducer from './serverErrorReducer';

describe('Server Error Reducer', () => {
  test('should return null when no action is passed', () => {
    const newState = serverErrorReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test('should return true when dispatch action "SERVER_ERROR" is passed', () => {
    const newState = serverErrorReducer(undefined, { type: actionTypes.SERVER_ERROR });
    expect(newState).toBe(true);
  });
});
