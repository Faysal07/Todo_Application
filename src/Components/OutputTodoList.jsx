import React from "react";
import { CircleX } from 'lucide-react';

function OutputTodoList ({ data, handleDeleteTask }) {
    return (
        <div className="">
            <div className="container">
                <div className="todo_output_box">
                    <h1 className="output_task">Output Todo List</h1>
                    <div className="output_task_data">
                        <table>
                            <thead>
                                <tr>
                                    <td>Task Name</td>
                                    <td>Task Details</td>
                                    <td>Task Date</td>
                                    <td>Task Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((task, id) => (
                                    <tr key={id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{task.date}</td>
                                        <td><button onClick={()=> handleDeleteTask(task.id)}><CircleX /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutputTodoList;