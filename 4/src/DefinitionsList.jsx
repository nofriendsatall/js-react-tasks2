import React from 'react';

// BEGIN (write your solution here)
const DefinitionsList = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <dl>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <dt>{item.dt}</dt>
          <dd>{item.dd}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default DefinitionsList;
// END
