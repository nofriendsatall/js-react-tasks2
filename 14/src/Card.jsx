import React from 'react';

// BEGIN (write your solution here)
const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h4 className="card-title">{children}</h4>;
};

const CardText = ({ children }) => {
  return <p className="card-text">{children}</p>;
};

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
// END
