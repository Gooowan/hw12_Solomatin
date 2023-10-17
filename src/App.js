import React from 'react';
import Week from './components/Week';

function App() {
  const Days = [
    {
      name: 'Monday',
      tasks: [
        { id: 1, title: 'Task 1', description: 'This is task 1', startTime: '08:00', endTime: '09:00' },
        { id: 2, title: 'Task 2', description: 'This is task 1', startTime: '09:00', endTime: '10:00' },
        { id: 3, title: 'Task 3', description: 'This is task 1', startTime: '10:00', endTime: '11:00' },
        { id: 4, title: 'Task 4', description: 'This is task 1', startTime: '19:00', endTime: '21:00' },
      ]
    },
    {
      name: 'Tuesday',
      tasks: [
        { id: 1, title: 'Task 1', description: 'This is task 1', startTime: '08:00', endTime: '09:00' },
        { id: 2, title: 'Task 2', description: 'This is task 1', startTime: '09:00', endTime: '10:00' },
        { id: 3, title: 'Task 3', description: 'This is task 1', startTime: '10:00', endTime: '11:00' },
        { id: 4, title: 'Task 4', description: 'This is task 1', startTime: '19:00', endTime: '21:00' },
      ]
    },
  ];

  return (
      <div className="container mt-4">
        <Week days={Days} />
      </div>
  );
}

export default App;
