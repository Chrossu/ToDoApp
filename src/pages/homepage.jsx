import React, { Fragment } from 'react';

import FilterSection from '../components/filter-section/filter-section.component';
import TodoAdd from '../components/todo-add/todo-add.component';
import TodoList from '../components/todo-list/todo-list.component';

const HomePage = () => (
  <Fragment>
    <FilterSection />
    <TodoList />
    <TodoAdd />
  </Fragment>
)

export default HomePage;