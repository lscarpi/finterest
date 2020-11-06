import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as authReducer } from './auth/reducer';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});
