import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import DateComp from "./DateComp";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // add task function
  const addTask = () => {
    if (task) {//1
      const newTask = {
        //2
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]); //3
      setTask(""); //4
    }
  };

  // delete task function
  const deleteTask = (index) => {
    //5
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
      //6
      if (i == index) {
        //7
        return { ...task, completed: !task.completed }; //8
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
          {/* //5  */}
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

// EXPLANATION
// 1-> if task string is not empty
// 2-> create a new object with properties : text(value = task input) and completed(boolean value false indicating task is not completed)
// 3-> creates a new array that includes all existing tasks using spread operator (...tasks)to include each task in the tasks array and adds the new task object (newTask) to the end of this array.
// 4-> clears the input field so that the user can add another task
// 5-> delete function creates a new array of newTasks and pushes the task whoose index does not matches with the task the user want to delete from the tasks
// 6-> tasks.map(...) is an array method that creates a new array by calling a given function
//task : is the current task
//i : is the index of the current task
// 7-> checks if the current index (i) matches the index of the task to be toggled (index)
// 8-> { ...task } uses the spread operator to create a shallow copy of the current task object.
///completed: !task.completed updates the completed property to its opposite value (true to false or false to true).
//This effectively toggles the completed status of the task.
// 9-> onchange : triggers whenever the value of input field is changed | e : it is the event object passed to the event handler when the event is triggered. | e.target.value : retrieves the current value of the input field.
