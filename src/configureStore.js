import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middleWares = [ReduxThunk];
const createStoreWithMiddlewares = applyMiddleware(...middleWares);

export default createStoreWithMiddlewares(rootReducer);
