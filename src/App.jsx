import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import OutputTodoList from "./Components/OutputTodoList";


function App() {

  const [taskTitle, setTaskTitle] = useState("");
      const [taskDescription, setTaskDescription] = useState("");
      const [taskDate, setTaskDate] = useState("");
      const [taskList, setTaskList] = useState([]);
  
      function handleToDO (e, field) {
          if (field === "title") {
              setTaskTitle(e.target.value);
          }
          else if (field === "description") {
              setTaskDescription(e.target.value);
          }
          else if (field === "date") {
              setTaskDate(e.target.value);
          }
          else {
              console.log("Error");
          }
      }
  
      console.log("Task: ", taskTitle , "Description: ", taskDescription, "Date: ", taskDate);
  
      const handleAddTask = () => {
        const newTask = {
          title: taskTitle,
          description: taskDescription,
          date: taskDate,
        };

        setTaskList([...taskList, newTask]);
      };

  return (
    <>
      <div className="todoApplication">
        <div className='container'>
          <div className='todo_title'>
            <h1>Input To Do List</h1>
          </div>
          <div className='todo_input'>
            <div className="todo_input_box">
                <span className="input_task">Input Task</span>
                <div className="form_control">
                    <label className="task_title">Task Title</label>
                    <input onChange={(e) => handleToDO(e, "title")} type="text" name="" id="" placeholder="Type Your Task Title Here. . . " className="task_title_box" />
                </div>
                <div className="form_control">
                    <label className="task_title">Task Description</label>
                    <textarea onChange={(e) => handleToDO(e, "description")} name="" id="" cols="10" rows="3" placeholder="Type Your Task Description Here. . . " className="task_title_box"></textarea>
                </div>
                <div className="form_control">
                    <label className="task_title">Task Date</label>
                    <input onChange={(e) => handleToDO(e, "date")} type="date" name="" id="" placeholder="Type Your Task Date Here. . . " className="task_title_box" />
                </div>
                <div className="form_control">
                    <button onClick={handleAddTask} type="button" className="submit_task">Add Task</button>
                </div>
            </div>
          </div>
          <div className='todo_output'>
            <OutputTodoList data={taskList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
