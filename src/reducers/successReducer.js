import actionTypes from '../actions';

/**
 * @function successReducer
 * @param  {boolean} state - current success state. if undefined then default is set to false.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default (state = false, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    case (actionTypes.RESET_GAME):
      return false;
    default:
      return state;
  }
};
