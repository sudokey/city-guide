import '../node_modules/normalize.css/normalize.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import App from './components/App';
import rootReducer from './reducers';
import { config } from '../package.json';
import * as userActions from './actions/user';


const store = createStore(rootReducer, applyMiddleware(thunk));

firebase.initializeApp(config.firebase);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root'),
  () => {
    store.dispatch(userActions.startAuthStateChangeListener());
  },
);
