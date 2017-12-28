import { createStore, combineReducers } from 'redux';
import { AddTodo, TodoActions } from '../components/todo/redux';
const reducer = combineReducers({
    AddTodo,
  });
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;