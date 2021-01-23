import actionTypes from '../actions';

/**
 * @function serverErrorReducer
 * @param  {boolean} state - state before the Reducer. if undefined then default is set to null.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state. ie secret word.
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return true;
    default:
      return state;
  }
};
