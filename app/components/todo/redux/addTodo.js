//reducer
import {
    Add_TODO,
} from './actions';
const initialState = {
    data: [],
}

function AddTodo(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO_ITEM':
            state.data.push(action.data);
            return state;
        default:
            return state;
    }
}

export default AddTodo;

export{
    addTodoItem,
} from './actions';