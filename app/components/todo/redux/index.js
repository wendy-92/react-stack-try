import AddTodo, * as AddTodoActions from './addTodo';
import { combineReducers } from 'redux';

const Todo = combineReducers({
    AddTodo,
});

export default Todo;

export {
    AddTodoActions,
};

