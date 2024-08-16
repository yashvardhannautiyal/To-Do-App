import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import DateComp from "./DateComp";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // add task function
  const addTask = () => {
    if (task) {
      const newTask = {
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]); 
      setTask(""); 
    }
  };

  // delete task function
  const deleteTask = (index) => {
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  };

  // task-completed function
  const taskCompleted = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i == index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className=" bg-white h-96 w-96 text-center rounded-md shadow-2xl">
        <div className="bg-orange-700 text-white rounded-t-md p-2 text-left">
          <p className="text-xl text-left font-semibold ">
            What you have for today!
          </p>
          <DateComp />
        </div>

        {/* Adding a task  */}
        <div className=" flex items-center justify-center ">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="border-none bg-slate-100 focus:outline-none rounded-md h-10 pl-2 text-sm"
          />{" "}
          <button
            onClick={addTask}
            className="font-extrabold bg-orange-700 rounded-md w-10 h-10 m-4 flex items-center justify-center text-white"
          >
            <MdAdd />
          </button>
        </div>



        {/* tasks div container  */}
        <div className="p-2">
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between gap-5 items-center p-1 border rounded"
              >
                {/* checkbox  */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => taskCompleted(index)}
                  className="mr-2 bg-white"
                />
                {/* line-through function  with task-text*/}

                <span className={task.completed ? "line-through" : ""}>
                  {task.text}
                </span>
                {/* delete task button  */}
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-orange-700 text-white p-1 rounded flex items-center"
                >
                  <MdDeleteOutline />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ToDo;


