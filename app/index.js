
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './factory/configureStore';

import ProviderRouter from '../router';

ReactDOM.render((
  <Provider store={store}>
    <ProviderRouter />
  </Provider>
), document.getElementById('app'));
