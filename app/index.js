
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './factory/configureStore';

import ProviderRouter from '../router';
console.log(store.getState());
ReactDOM.render((
  <Provider store={store}>
    <ProviderRouter />
  </Provider>
), document.getElementById('app'));
