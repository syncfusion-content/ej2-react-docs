import React from 'react';

export const Row = (props) => {
  return (
    <tr>
      <td>{props.EmployeeID}</td>
      <td>{props.Employees}</td>
      <td>{props.Designation}</td>
    </tr>
  );
};