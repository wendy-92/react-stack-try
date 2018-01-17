import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk),
 
);
  
export default store;