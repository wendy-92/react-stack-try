//reducer
import {
    Add_TODO,
} from './actions';
const initialState = {
    data: '4',
}

function AddTodo(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO_ITEM':
            return Object.assign({}, state, {

            })
        default: return state;
    }
}

export default AddTodo;

export{
    addTodoItem,
} from './actions';