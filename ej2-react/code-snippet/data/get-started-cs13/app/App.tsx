

import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { Row } from './rowTemplate';

export default class App extends React.Component<{}, {}>{
    public dm: DataManager;
    public style: { [x: string]: string };
    constructor(props: object) {
        super(props);
        this.state = { items: [] };
        this.style = { class: 'e-form' };
        this.dm = new DataManager(data.slice(0, 5));
        this.dm.executeQuery(new Query())
      .then((e: ReturnOption) => {
        this.setState({
          items: (e.result as object[]).map((row: object) => (
            <Row key={row.OrderID} {...row} />
          ))
        });
      });
    this.insertUpdate = this.insertUpdate.bind(this);
  }

    public insertUpdate() {
        const orderid: HTMLInputElement = document.getElementById('OrderID') as HTMLInputElement;
        const cusid: HTMLInputElement = document.getElementById('CustomerID') as HTMLInputElement;
        const empid: HTMLInputElement = document.getElementById('EmployeeID') as HTMLInputElement;
        const rowdata: { OrderID: number, CustomerID: string, EmployeeID: number } = {
            CustomerID: cusid.value,
            EmployeeID: +empid.value,
            OrderID: +orderid.value
        };
        if (!rowdata.OrderID) { return; }
        this.dm.insert(rowdata);
        this.dm.executeQuery(new Query())
            .then((e: ReturnOption) => {
                this.setState({
                    items: (e.result as object[]).map((row: object) => (
                        <Row key={row.OrderID} {...row} />
                      ))
                });
                
            });
    }

    public render() {
        return (<div><div style={this.style}>
            <input type="number" id='OrderID' placeholder="Order ID" />
            <input type="text" id="CustomerID" placeholder="Customer ID" />
            <input type="number" id="EmployeeID" placeholder="Employee ID" />
            <input type="button" value="Insert" id="manipulate" onClick={this.insertUpdate} /></div>
            <div><table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{ getValue('items', this.state) }</tbody>
            </table>
            </div></div>)
    }
}


