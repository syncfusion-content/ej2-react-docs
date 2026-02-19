import { getValue } from '@syncfusion/ej2-base';
import * as React from 'react';
export class Row extends React.Component {
    render() {
        const item = this.props;
        if (getValue('caption', item)) {
            return (<tr>
                <td colSpan={3}>{getValue('caption', item)}</td>
            </tr>);
        }
        return (
            <tr>
                <td>{item.OrderID}</td>
                <td>{item.CustomerID}</td>
                <td>{item.EmployeeID}</td>
            </tr>
        );
    }
}
