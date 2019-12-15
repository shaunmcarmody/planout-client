import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LearnReact from './views/LearnReact/LearnReact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LearnReact} />
    </Switch>
  );
}

export default App;
