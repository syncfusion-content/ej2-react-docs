import * as React from 'react';
export class ChildRow extends React.Component {
    render() {
        const item = this.props;
        return (<tr>
            <td>{item.ProductID}</td>
            <td>{item.UnitPrice}</td>
            <td>{item.Quantity}</td>
           </tr>);
    }
}
