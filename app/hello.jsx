import React from 'react';

class Hello extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>hello, world</h1>
                {this.props.children}1
            </div>
            
        )
    }
}

export default Hello;
