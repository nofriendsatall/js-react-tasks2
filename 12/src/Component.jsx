import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

// BEGIN (write your solution here)

const EventLogger = () => {
  const [log, setLog] = useState([]);

  const handleAdd = (increment) => {
    const newestValue = log.length > 0 ? log[0] : 0;
    const newValue = newestValue + increment;
    setLog([newValue, ...log]);
  };

  const handleIncrement = () => handleAdd(1);
  const handleDecrement = () => handleAdd(-1);

  const handleDelete = (index) => {
    const newLog = log.filter((_, i) => i !== index);
    setLog(newLog);
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button 
          type="button" 
          className="btn btn-outline-success" 
          onClick={handleIncrement}
        >
          +
        </button>
        <button 
          type="button" 
          className="btn btn-outline-danger" 
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      
      {log.length > 0 && (
        <div className="list-group">
          {log.map((value, index) => (
            <button
              key={index}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleDelete(index)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventLogger;
// END
