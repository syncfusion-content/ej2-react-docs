import React from 'react';

const Row = (props) => {
  const item = props;

  return (
    <tr>
        <td>{item.OrderID}</td>
        <td>{item.CustomerID}</td>
        <td>{item.Employee.FirstName}</td>
    </tr>
  );
};

export default Row;
