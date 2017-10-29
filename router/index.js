import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Hello from '../app/Hello';

class ProviderRouter extends React.Component{
    render() {
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Hello}/>
            </Router>
        )
    }
}

export default ProviderRouter;
