import actionTypes from '../actions';

/**
 * @function giveUpGuessReducer
 * @param  {boolean} state - current success state. if undefined then default is set to false.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVEUP_GUESS:
      return true;
    default:
      return state;
  }
};
