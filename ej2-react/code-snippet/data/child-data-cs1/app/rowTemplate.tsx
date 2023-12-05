import * as React from 'react';
import { ChildRow } from './childTemplate';
import { IOrders } from './orders';

export class Row extends React.Component<{}, {}> {
    public getRows(data: object[] = []) {
        return data.map((row: object, index: number) => (
            <ChildRow key={index} {...row} />
        ));
    }

    public render() {
        const item: IOrders = this.props as IOrders;
        return (
            <tbody>
                <tr>
                    <td>{item.OrderID}</td>
                    <td>{item.CustomerID}</td>
                    <td>{item.EmployeeID}</td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <table id='datatable' className='e-table'>
                            <thead>
                                <tr><th>ID</th><th>Price</th><th>Quantity</th></tr>
                            </thead>
                            <tbody>{this.getRows(item.Order_Details)}</tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        );
    }
}
