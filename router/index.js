import React from 'react';
import { Router, Route, browserHistory,
    IndexRedirect, } from 'react-router';

import Hello from '../app/Hello';
import About from '../app/components/About';

class ProviderRouter extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <Router history={browserHistory}>
            <Route path="/" component={Hello}>
                <Route path="about" component={About} />
            </Route>
        </Router>
        );
    }
}
export default ProviderRouter;
