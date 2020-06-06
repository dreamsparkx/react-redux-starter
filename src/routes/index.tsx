import React from 'react';
import { Route, Switch } from 'react-router';
import Hello from '../containers/hello';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route render={() => (<div>Miss</div>)} />
        </Switch>
    );
}