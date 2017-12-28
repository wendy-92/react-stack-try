import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTodoActions } from '../components/todo/redux';
import Todo from '../components/todo/Todo';


class PageTodo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { data = [] } = this.props;
        return(
            <div>
               <Todo
                  {...this.props.AddTodo}
                  {...this.props.AddTodoActions}
               />
            </div>

        )
    }
}

export default connect(state => ({
    AddTodo: state.todo.AddTodo
}), dispatch => ({
    AddTodoActions: bindActionCreators(AddTodoActions, dispatch)
}))(PageTodo);
