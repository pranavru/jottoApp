import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

export const middleWares = [ReduxThunk, logger];
const createStoreWithMiddlewares = applyMiddleware(...middleWares);

export default createStoreWithMiddlewares(rootReducer);
