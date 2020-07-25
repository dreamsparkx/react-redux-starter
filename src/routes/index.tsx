import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from '../containers/hello';
import Chat from '../containers/chat';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/chat" component={Chat} />
            <Route component={Test} />
        </Switch>
    );
}

function Test() {
    return <div>Miss</div>;
}
