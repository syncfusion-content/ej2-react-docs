import * as React from 'react';
import { IOrders } from './orders';

export class Row extends React.Component<{}, {}>{
    public render() {
        const item: IOrders = this.props as IOrders; 
        return (
            <tr>
                <td>{item.OrderID}</td>
                <td>{item.CustomerID}</td>
                <td>{item.EmployeeID}</td>
            </tr>
        )
    }
}