
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { IOrders } from './orders';
import { Row } from './rowTemplate';
import './App.css';

export default class App extends React.Component<{}, {}>{

    public result: IOrders[] = new DataManager(data).executeLocal(new Query()
        .where('EmployeeID', 'equal', 3)) as IOrders[];

    public items: React.ReactNode[] = this.result.map((row: IOrders, index) => (
        <Row key={index} {...row} />
    ));
    public render() {
    return (<table id='datatable' className='e-table'>
            <thead>
             <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
            </thead>
            <tbody>{this.items}</tbody>
           </table>);
    }

}
