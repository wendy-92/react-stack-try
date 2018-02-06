import { observable, computed ,action, extendObservable} from 'mobx';

export default class TodoList {
    @observable todos = [];
    @observable addTodo="";
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action setTodo(str) {
        this.addTodo = str;
    }
    @action add() {
        this.todos.push({id: Math.random(),title: this.addTodo, finished: false})
        this.addTodo = "";
    }
}