import React from 'react';
import TodoListView from '../components/todo/TodoListView';
import TodoList from '../components/todo/TodoList';

class PageTodo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const store = new TodoList();
    console.log(store)
    return (
      <div>
          <TodoListView todoList={store}/>
      </div>
    );
  }
}
export default PageTodo;
