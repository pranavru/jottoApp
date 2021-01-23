import actionTypes from '../actions';
/**
 * @function guessedWordReducer
 * @param  {boolean} state - current success state. if undefined then default is set to false.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
