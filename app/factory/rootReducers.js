import { combineReducers } from 'redux';

import Todo from '../components/todo/redux';
import music from '../components/music/redux';

const rootReducers = combineReducers({
    todo: Todo,
    music,
});
export default rootReducers;
