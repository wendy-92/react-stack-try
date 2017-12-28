import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTodoActions } from './redux';


class Todo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            addItem: '',
        };
    }
    handleAdd = () => {
        if(this.state.addItem){
            this.props.addTodoItem({checked: false,value: this.state.addItem});
            this.setState({
                addItem: '',
            })
        }
        
    }
    handleChangeAddItem = (ev) => {
        const value = ev.target.value;
        this.setState({
            addItem: value,
        });
    }
    render(){
        const { data = [] } = this.props;
        return(
            <div>
                {data.map(item => 
                    <div>
                        <input type="checkbox" value={item.checked} onChange={this.handleChangeAddItem}/> 
                        {item.value}
                    </div>
                )}
                <input type="text" value={this.state.addItem} onChange={this.handleChangeAddItem}/>
                <button onClick={this.handleAdd}>添加</button>
            </div>

        )
    }
}

export default Todo;
