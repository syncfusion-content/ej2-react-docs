import React from 'react';

export const Row = (props) => {
  return (
    <tr>
      <td>{props.OrderID}</td>
      <td>{props.CustomerID}</td>
      <td>{props.EmployeeID}</td>
    </tr>
  );
};
