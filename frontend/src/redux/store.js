import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createRootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

const history = createBrowserHistory();
const componseEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })
const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history), // root reducer with router state
  {},
  componseEnhancers(
    applyMiddleware(...middleware)
  )
);

//checkForSavedData(store, history);

export { store, history }
