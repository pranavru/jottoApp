/* eslint-disable no-undef */
import { storeFactory } from './testUtils';
import { guessWord } from '../actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed Words', () => {
    let store;
    const initialState = {
      secretWord, giveUpGuess: false, userInput: null, serverError: false,
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('should update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('should update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed Words', () => {
    const guessedWords = [
      {
        guessedWord: 'agile',
        letterMatchCount: 1,
      },
    ];

    let store;
    const initialState = {
      guessedWords,
      secretWord,
      userInput: null,
      serverError: false,
      giveUpGuess: false,
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('should update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });

    test('should update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
