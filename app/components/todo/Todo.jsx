import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTodo, AddTodoActions } from './redux';


class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>this is a study app
                {this.props.todo.data}
                 
            </div>

        )
    }
}

export default connect(state => ({
    todo: state.AddTodo
}), dispatch => ({
    AddTodoActions: bindActionCreators(AddTodoActions, dispatch)
}))(Todo);
