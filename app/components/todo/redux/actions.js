import makeActionCreator from '../../../factory/makeActionCreator';

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

export const addTodoItem = makeActionCreator(ADD_TODO_ITEM, 'index');