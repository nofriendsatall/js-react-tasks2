import React,{Children} from 'react';

// BEGIN (write your solution here)
const ListGroup = ({ children }) => {
  return (
    <ul className="list-group">
      {Children.map(children, (child, index) => (
        <li key={index} className="list-group-item">
          {child}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
// END
