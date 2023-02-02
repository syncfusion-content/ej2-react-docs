import * as React from 'react';
export class Row extends React.Component {
    render() {
        const item = this.props;
        return (<tr>
                 <td>{item.OrderID}</td>
                 <td>{item.CustomerID}</td>
                 <td>{item.EmployeeID}</td>
                </tr>);
    }
}
