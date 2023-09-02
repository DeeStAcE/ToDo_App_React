import React from 'react';

export default function NewTask(props) {

    const handleSubmit = (e) => {
        e.preventDefault()

        const elements = e.currentTarget.elements
        // console.log(elements)

        props.onNewTask({
            title: elements[0].value,
            description: elements[1].value,
            status: "open"
        })

        elements[0].value = ""
        elements[1].value = ""
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"/>
                    </div>
                    <button className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}