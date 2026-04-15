import * as React from 'react';
import { IOrders } from './orders';

export const Row: React.FC<IOrders> = (props) => {
  return (
    <tr>
      <td>{props.EmployeeID}</td>
      <td>{props.Employees}</td>
      <td>{props.Designation}</td>
    </tr>
  );
};