import actionTypes from '../actions';

/**
 * @function secretWordReducer
 * @param  {boolean} state - state before the Reducer. if undefined then default is set to null.
 * @param  {object} action - Action to be reduced.
 * @returns {boolean} - New success state. ie secret word.
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
