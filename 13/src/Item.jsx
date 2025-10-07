import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onRemove }) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto">
          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={onRemove}
          >
            -
          </button>
        </div>
        <div className="col">{task}</div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
// END
