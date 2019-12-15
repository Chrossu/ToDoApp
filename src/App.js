import React, { Fragment } from 'react';

import Homepage from './pages/homepage';
import TodoDetails from './pages/todo-details/todo-details';

import './globals.style.scss'
import { Route } from 'react-router-dom';

const App = () => (
  <Fragment>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/todo" component={TodoDetails} />
  </Fragment>
)

export default App;
