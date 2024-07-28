import React, { useState } from "react"

const ToDo = () =>{ 
    const [tasks, setTasks] = useState([]);
    const [task, setTask] =  useState("");

    // add task function 
    const addTask = () =>{
        if(task){ //1
            const newTask = { //2 
                text : task,
                completed: false,
            };
            setTasks([...tasks, newTask]); //3 
            setTask(''); //4 
        }
    };

    // delete task function 
    const deleteTask = (index) =>{
        const newTasks = [];
        for(let i=0; i<tasks.length; i++){
            if(i !== index){
                newTasks.push(tasks[i]);
            }
        }
        setTasks(newTasks);
    }

    return (
        <div className="flex items-center justify-center p-10">
        <div className=" bg-white h-96 w-96 text-center rounded-md">
            {/* Adding a task  */}
        <p className=" font-medium p-2 text-lg text-white bg-orange-700 text-left rounded-t-md">What you have for today!</p>

        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" /> {/* //5  */}
        <button onClick={addTask}>Add task</button>

        <ul>
            {tasks.map(  
                (task, index) =>(
            <li key={index}>
                {/* checkbox  */}
                {/* <input type="checkbox" checked = {task.completed} onChange={() =>toggleTask(index)} /> */}
                {/* line-through function  with task-text*/}
                {/* <span className={task.completed ? 'line-through' : ''}>{task.text}</span> */}
                <span >{task.text}</span>
                {/* delete task button  */}
                <button onClick={() => deleteTask(index)}>Delete</button>
            </li>           
            ))}
        </ul>
        </div>
        </div>
    );
}
export default ToDo;




// EXPLANATION 
// 1-> if task string is not empty 
// 2-> create a new object with properties : text(value = task input) and completed(boolean value false indicating task is not completed)
// 3-> creates a new array that includes all existing tasks using spread operator (...tasks)to include each task in the tasks array and adds the new task object (newTask) to the end of this array.
// 4-> clears the input field so that the user can add another task
// 5-> onchange : triggers whenever the value of input field is changed | e : it is the event object passed to the event handler when the event is triggered. | e.target.value : retrieves the current value of the input field.
// 6-> this removes the current task in the index that the user clicked and creates a new array newTasks without the removed task
// filter : iterates over each element in tasks and creates a new array after the given function is performed
