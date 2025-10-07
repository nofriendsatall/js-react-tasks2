import React from 'react';

// BEGIN (write your solution here)
const Card = ({ title, text }) => {
    if (!title && !text) {
      return null;
    }
  
    return (
      <div className="card">
        <div className="card-body">
          {title && <h4 className="card-title">{title}</h4>}
          {text && <p className="card-text">{text}</p>}
        </div>
      </div>
    );
  };
  
  export default Card;
// END
