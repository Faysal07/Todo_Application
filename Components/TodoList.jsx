import React, { useState } from "react";

function TodoList () {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");

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


    return (
        <div>
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
                    <button type="button" className="submit_task">Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;