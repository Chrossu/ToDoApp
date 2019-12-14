import React from 'react';
import Footer from './components/filter-section/filter-section-component';
import AddTodo from './components/todo-add/todo-add.component';
import TodoList from './components/todos-list/todos-list.component';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App;
