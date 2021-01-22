import actionTypes from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.USER_ENTERED:
      return 'entered';
    case actionTypes.USER_IS_ENTERING:
      return 'is_entering';
    case actionTypes.RESET_GAME:
      return null;
    default:
      return state;
  }
};
