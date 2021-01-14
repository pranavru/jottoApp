import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middleWares = [ReduxThunk];
if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}
export default applyMiddleware(...middleWares)(createStore)(rootReducer);
