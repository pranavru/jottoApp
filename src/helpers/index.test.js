/* eslint-disable no-undef */
import { getLetterMatchCount } from './index';

describe('get Letter Match count', () => {
  const secretWord = 'Party';
  const testLetters = ['bones', 'train', 'parka'];
  test('should return correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount(testLetters[0], secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('should return the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount(testLetters[1], secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('should return correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount(testLetters[2], secretWord);
    expect(letterMatchCount).toBe(2);
  });
});
