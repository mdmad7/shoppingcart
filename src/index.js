import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';

// import { BrowserRouter as Router } from 'react-router-dom';
import App from './layouts/App';

import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), promise(), thunk, logger),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
