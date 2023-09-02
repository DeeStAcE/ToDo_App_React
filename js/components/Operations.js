import React from 'react';
import Operation from './Operation';

export default function Operations(props) {

    const updateOperations = (e) => {
        e.preventDefault()

        const elements = e.currentTarget.elements
        // console.log(elements)

        props.updateOperations({
            description: elements[0].value,
            timeSpent: 0,
            task: props.task
        })

        elements[0].value = ""
    }

    return (
        <>
            {
                props.form === true && (
                    <div className="card-body">
                        <form onSubmit={updateOperations}>
                            <div className="input-group">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Operation description"/>

                                <div className="input-group-append">
                                    <button className="btn btn-info">
                                        Add
                                        <i className="fas fa-plus-circle ml-1"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }

            <ul className="list-group list-group-flush">
                {
                    props.operations && props.operations.map(operation => <Operation key={operation.id}
                                                                                     operation={operation}/>)
                }
            </ul>
        </>
    )
}