import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

import NewTask from "./components/NewTask";
import Task from "./components/Task";

import {getTasks, addTask, deleteTask} from './api/tasks';

function App() {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        getTasks((data) => {
            // console.log(data);
            setTasks(data);
        });
    }, []);

    const onNewTask = (newTask) => {
        // console.log(newTask)
        addTask(newTask, data => {
            // console.log(data)
            setTasks(prevTasks => [...prevTasks, data])
        })
    }

    const onRemoveTask = (taskId) => {
        // console.log(taskId)
        deleteTask(taskId, data => {
            setTasks(tasks.filter(task => task.id !== taskId))
        })
    }


    return (
        <>
            <NewTask onNewTask={onNewTask}/>
            {
                tasks && tasks.map(task => <Task key={task.id} task={task} onRemoveTask={onRemoveTask}/>)
            }
        </>
    )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);