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
        window.addEventListener('hashchange', () => {
            this.setState({
                router: window.location.hash.substr(1),
            });
        });
    }

    render(){
        let child = '';
        switch(this.state.router){
            case '/hello': 
              child = <Hello />;
              break;
            default: 
              child = <div />;
        }
        console.log(this.state.router, this.state.router === '/hello');
        return(
        <div>
            <h1>App</h1>
            <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/hello">hello</a></li>
            </ul>
            {child}
        </div>
        );
    }
}
export default ProviderRouter;
