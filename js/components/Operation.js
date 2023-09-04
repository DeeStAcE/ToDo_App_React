import React, {useState} from 'react';
import {updateOperation} from "../api/operations";

// TODO...

export default function Operation({operation, onRemoveOperation}) {

    const [addTimeBoolean, setAddTimeBoolean] = useState(false)
    const [newTimeSpent, setNewTimeSpent] = useState(0)
    const [timeSpentState, setTimeSpentState] = useState(operation.timeSpent)

    const handleAddTime = (e) => {
        e.preventDefault()

        const updatedOperation = {
            ...operation, timeSpent: timeSpentState + newTimeSpent
        }

        console.log(updatedOperation)
        updateOperation(operation.id, updatedOperation, data => {
            // console.log(data)
            setAddTimeBoolean(false)
            setTimeSpentState(data.timeSpent)
            setNewTimeSpent(0)
        })
    }

    const handleXButton = (e) => {
        e.preventDefault()
        setAddTimeBoolean(false)
        setNewTimeSpent(0)
    }

    const handleRemoveOperation = (e) => {
        e.preventDefault()

        onRemoveOperation(operation.id)
    }

    return (<li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
            {operation.description}

            {timeSpentState > 0 && <span className="badge badge-success badge-pill ml-2">
                        {timeSpentState >= 60 && `${Math.floor(timeSpentState / 60)}h`} {timeSpentState - (Math.floor(timeSpentState / 60)) * 60}min

        </span>}
        </div>
        {addTimeBoolean && (<form>
            <div className="input-group input-group-sm">
                <input type="number"
                       className="form-control"
                       placeholder="Spent time in minutes"
                       style={{width: '12rem'}}
                       value={newTimeSpent}
                       onChange={(e) => setNewTimeSpent(parseInt(e.target.value))}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" onClick={handleAddTime}><i
                        className="fas fa-save"></i></button>
                    <button className="btn btn-outline-dark" onClick={handleXButton}><i
                        className="fas fa-times false"></i></button>
                </div>
            </div>
        </form>)}

        {!addTimeBoolean && (<div>
            <button className="btn btn-outline-success btn-sm mr-2"
                    onClick={() => setAddTimeBoolean(!addTimeBoolean)}>
                Add time
                <i className="fas fa-clock ml-1"></i>
            </button>

            <button className="btn btn-outline-danger btn-sm" onClick={handleRemoveOperation}><i
                className="fas fa-trash"></i></button>
        </div>)}
    </li>)
}