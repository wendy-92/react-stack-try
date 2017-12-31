import React from 'react';
import { Router, Route, browserHistory,
    IndexRedirect, } from 'react-router';

import Hello from '../app/Hello';
import About from '../app/components/About';
import PageTodo from '../app/views/PageTodo';
import PageMusic from '../app/views/PageMusic';


class ProviderRouter extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <Router history={browserHistory}>
            <Route path="/" component={Hello}>
                <Route path="about" component={About} />
                <Route path="todo" component={PageTodo} />
                <Route path="music" component={PageMusic} />
            </Route>
        </Router>
        );
    }
}
export default ProviderRouter;
