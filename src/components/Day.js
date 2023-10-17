import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

function Day(props) {
    return (
        <div className="col border p-3">
            <h4>{props.dayName}</h4>
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    startTime={task.startTime}
                    endTime={task.endTime}
                />
            ))}
            <NewTaskForm />
        </div>
    );
}

export default Day;
