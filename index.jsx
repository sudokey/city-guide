import './node_modules/normalize.css/normalize.css';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { config } from './package.json';

firebase.initializeApp(config.firebase);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
