import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import Item from './Item';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: uniqueId('task_'),
      text: inputValue.trim()
    };

    setTasks([newTask, ...tasks]);
    setInputValue('');
  };

  const handleRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={inputValue}
              required
              className="form-control"
              placeholder="I am going..."
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      
      {tasks.map(task => (
        <Item 
          key={task.id}
          task={task.text} 
          onRemove={() => handleRemove(task.id)} 
        />
      ))}
    </div>
  );
};

export default TodoBox;
// END
