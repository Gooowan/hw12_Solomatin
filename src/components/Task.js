import React from 'react';

function Task(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p><strong>Start:</strong> {props.startTime}</p>
                <p><strong>End:</strong> {props.endTime}</p>
            </div>
        </div>
    );
}

export default Task;