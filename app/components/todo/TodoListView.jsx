import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import TodoList from './TodoList';

@observer
class TodoListView extends Component {
    constructor(props) {
        super(props);
    }
    changeAddTodo = (ev) => {
        const value = ev.target.value;
        this.props.todoList.setTodo(value);
    }
    submit = () => {
        this.props.todoList.add();
    }
    render() {
        return(
            <div>
                <ul>
                    {this.props.todoList.todos.map(todo =>
                        <TodoView todo={todo} key={todo.id} />
                    )}
                </ul>
                Tasks left: {this.props.todoList.unfinishedTodoCount}
                <div>
                    Add todo:<input type="text" name="todo" value={this.props.todoList.addTodo} onChange={this.changeAddTodo}/>
                            <button onClick={this.submit}>submit</button>
                </div>
            </div>
        )
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

export default TodoListView;