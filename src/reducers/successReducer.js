import actionTypes from '../actions';

/**
 * @function successReducer
 * @param  {boolean} state - current success state.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default (state = false, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return false;
  }
};
