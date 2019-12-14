import React from 'react'
import Footer from './components/filters/filters-component'
import AddTodo from './components/todo-add/todo-add.component'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
