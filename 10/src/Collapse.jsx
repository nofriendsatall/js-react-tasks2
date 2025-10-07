import React, { useState } from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Collapse = ({ text, opened = true }) => {
  const [isOpen, setIsOpen] = useState(opened);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          href="#"
          role="button"
          aria-expanded={isOpen}
          onClick={toggleCollapse}
        >
          Link with href
        </a>
      </p>
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <div className="card card-body">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
// END
