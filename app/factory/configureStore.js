import { createStore } from 'redux';
import rootReducers from './rootReducers';

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
export default store;