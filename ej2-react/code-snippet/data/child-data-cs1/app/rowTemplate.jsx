import * as React from 'react';
import { ChildRow } from './childTemplate';
export class Row extends React.Component {
    getRows(data) {
        const dat = data.map((row,index) => (<ChildRow key={index} {...row}/>));
        return dat;
    }
    render() {
        const item = this.props;
        return (<tbody><tr>
            <td>{item.OrderID}</td>
            <td>{item.CustomerID}</td>
            <td>{item.EmployeeID}</td>
           </tr>
           <tr><td colSpan={3}>
           <table id='datatable' className='e-table'>
               <thead><tr><th>ID</th><th>Price</th><th>Quantity</th></tr></thead>
               <tbody>{this.getRows(item.Order_Details)}</tbody>
           </table>
           </td></tr>
           </tbody>);
    }
}
