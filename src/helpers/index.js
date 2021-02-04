/**
 * @param  {} guessedWrd
 * @param  {} secretWord
 */
// eslint-disable-next-line import/prefer-default-export
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter)).length;
};

module.exports = {
  getLetterMatchCount,
};
