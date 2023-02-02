import { getValue } from '@syncfusion/ej2-base';
import * as React from 'react';
import { IOrders } from './orders';

export class Row extends React.Component<{}, {}>{
    public render() {
        const item: IOrders = this.props as IOrders; 
        if (getValue('caption', item)) {
            return (<tr>
                <td colSpan={3}>{getValue('caption', item)}</td>
            </tr>)
        }
        return (<tr>
                 <td>{item.OrderID}</td>
                 <td>{item.CustomerID}</td>
                 <td>{item.EmployeeID}</td>
                </tr>)
    }
}