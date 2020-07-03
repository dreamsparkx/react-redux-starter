import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from '../containers/hello';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route component={Test} />
    </Switch>
  );
}

function Test() {
  return <div>Miss</div>;
}
