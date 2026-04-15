import * as React from 'react';
import { IOrders } from './orders';

export const Row: React.FC<IOrders> = (props) => {
  return (
    <tr>
      <td>{props.OrderID}</td>
      <td>{props.CustomerID}</td>
      <td>{props.EmployeeID}</td>
    </tr>
  );
};