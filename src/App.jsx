import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import TodoList from './Components/todoList'
import OutputTodoList from './Components/OutputTodoList'

function App() {

  return (
    <>
      <div className="todoApplication">
        <div className='container'>
          <div className='todo_title'>
            <h1>Input To Do List</h1>
          </div>
          <div className='todo_input'>
            <TodoList />
          </div>
          <div className='todo_output'>
            <OutputTodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
