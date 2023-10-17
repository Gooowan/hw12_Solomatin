import React from 'react';
import Day from './Day';

function Week(props) {
    return (
        <div className="row">
            {props.days.map(day => (
                <Day
                    key={day.name}
                    dayName={day.name}
                    tasks={day.tasks}
                />
            ))}
        </div>
    );
}

export default Week;
