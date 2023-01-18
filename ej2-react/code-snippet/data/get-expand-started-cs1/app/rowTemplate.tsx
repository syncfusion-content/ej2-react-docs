import * as React from 'react';

interface IOrders {OrderID: number, CustomerID: string, Employee: {FirstName: string} };

export class Row extends React.Component<{}, {}>{
    public render() {
        const item: IOrders  = this.props as IOrders; 
        return (<tr>
            <td>{item.OrderID}</td>
            <td>{item.CustomerID}</td>
            <td>{item.Employee.FirstName}</td>
           </tr>)
    }
}