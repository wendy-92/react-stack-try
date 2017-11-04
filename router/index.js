import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Hello from '../app/Hello';

class ProviderRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            router: window.location.hash.substr(1),
        }
    }
    componentDidMount(){
        window.addEventListener('hashChange', () => {this.setState({
            route: window.location.hash.substr(1),
        })});
    }

    render(){
        const child = '';
        switch(this.state.router){
            case 'hello': 
              return <Hello />;
            default: 
              return <div />;
        }
        console.log(this.state.router);
        return(
        <div>
            <h1>App</h1>
            <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/hello">Inbox</a></li>
            </ul>
            {child}
        </div>
        );
    }
}
export default ProviderRouter;
