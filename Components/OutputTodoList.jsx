import React from "react";

function OutputTodoList () {
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
                                <tr>
                                    <td>Faysal</td>
                                    <td>I am Faysal</td>
                                    <td>04/29/2026</td>
                                    <td>X</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutputTodoList;