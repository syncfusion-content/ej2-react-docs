import * as React from 'react';
import { IOrders } from './orders';

export const Row: React.FC<IOrders> = (props) => {
  const item: IOrders  = props as IOrders; 
    return (<tr>
        <td>{item.OrderID}</td>
        <td>{item.CustomerID}</td>
        <td>{item.Employee.FirstName}</td>
        </tr>)
};