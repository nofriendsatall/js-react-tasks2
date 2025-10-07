import cn from 'classnames';
import React, { useState } from 'react';

// BEGIN (write your solution here)
const BtnGroup = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic button group">
      <button
        type="button"
        className={`btn btn-secondary left ${activeButton === 'left' ? 'active' : ''}`}
        onClick={() => handleClick('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={`btn btn-secondary right ${activeButton === 'right' ? 'active' : ''}`}
        onClick={() => handleClick('right')}
      >
        Right
      </button>
    </div>
  );
};

export default BtnGroup;
// END
