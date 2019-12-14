import React from 'react';

import FilterSection from './components/filter-section/filter-section.component';
import TodoAdd from './components/todo-add/todo-add.component';
import TodoList from './components/todo-list/todo-list.component';

import './globals.style.scss'

const App = () => (
  <div>
    <FilterSection />
    <TodoList />
    <TodoAdd />
  </div>
)

export default App;
