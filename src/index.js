import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import rootReducer from 'Redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, promiseMiddleware())),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
