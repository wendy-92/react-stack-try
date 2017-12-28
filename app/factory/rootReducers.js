import { combineReducers } from 'redux';

import Todo from '../components/todo/redux';

const rootReducers = combineReducers({
    todo: Todo,
});

export default rootReducers;
