/* eslint-disable no-undef */
import moxios from 'moxios';
/* eslint-disable no-undef */
import actionTypes, { correctGuess, getSecretWord } from '.';
import { storeFactory } from '../test/testUtils';

describe('correctGuess() Method', () => {
  test('should return an action type with "CORRECT_GUESS" ', () => {
    const correctGuessAction = correctGuess();
    expect(correctGuessAction).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('getSecretWord action creator', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should add response word to state - Integration Test', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        statusText: 'OK',
        response: { secretWord },
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
