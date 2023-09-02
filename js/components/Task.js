import React, {useEffect, useState} from 'react';
import Operations from './Operations';

import {getOperations, addNewOperation} from '../api/operations';
import {updateTask} from "../api/tasks";

export default function Task({task, onRemoveTask}) {

    const [operations, setOperations] = useState(null);
    const [componentState, setComponentState] = useState(false)
    const [taskStatus, setTaskStatus] = useState(task.status)

    useEffect(() => {
        getOperations(task.id, (data) => {
            // console.log(data);
            setOperations(data);
        })
    }, []);

    const handleFinishTask = (e) => {
        e.preventDefault()

        setTaskStatus("closed")
        const updatedTask = {
            ...task,
            status: "closed"
        }

        updateTask(task.id, updatedTask, data => {
            // console.log(data)
        })
    }

    const handleRemoveTask = (e) => {
        e.preventDefault()

        onRemoveTask(task.id)
    }

    const updateOperations = (operation) => {
        setComponentState(false)

        addNewOperation(task.id, operation, data => {
            // console.log(data)
            setOperations(prevOperations => [...prevOperations, data])
        })
    }

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{task.title}</h5>
                    <h6 className="card-subtitle text-muted">{task.description}</h6>
                </div>


                <div>
                    {
                        taskStatus === 'open' && (
                            <>
                                <button className="btn btn-info btn-sm mr-2"
                                        onClick={() => setComponentState(!componentState)}>
                                    Add operation
                                    <i className="fas fa-plus-circle ml-1"></i>
                                </button>

                                <button className="btn btn-dark btn-sm" onClick={handleFinishTask}>
                                    Finish
                                    <i className="fas fa-archive ml-1"></i>
                                </button>
                            </>
                        )
                    }
                    {
                        (operations && operations.length < 1) && (
                            <button className="btn btn-outline-danger btn-sm ml-2" onClick={handleRemoveTask}>
                                <i className="fas fa-trash false"></i>
                            </button>
                        )
                    }
                </div>
            </div>

            <Operations task={task} operations={operations} form={componentState}
                        updateOperations={updateOperations}/>
        </section>
    )
}