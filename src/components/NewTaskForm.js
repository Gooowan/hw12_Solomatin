import React from 'react';

function NewTaskForm(props) {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="taskTitle" className="form-label">Task Title</label>
                <input type="text" className="form-control" id="taskTitle" />
            </div>
            <div className="mb-3">
                <label htmlFor="taskTime" className="form-label">Task Time</label>
                <input type="time" className="form-control" id="taskTime" />
            </div>
            <div className="mb-3">
                <label htmlFor="taskDuration" className="form-label">Duration (minutes)</label>
                <input type="number" className="form-control" id="taskDuration" />
            </div>
        </form>
    );
}

export default NewTaskForm;
