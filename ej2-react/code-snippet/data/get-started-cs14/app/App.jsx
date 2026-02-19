import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { Row } from './rowTemplate';
export default class App extends React.Component {
    dataManager;
    style;
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.style = { class: 'e-form' };
        this.dataManager = new DataManager(data.slice(0, 5));
        this.dataManager.executeQuery(new Query())
            .then((e) => {
                this.setState({
                    items: e.result.map((row,index) => (
                        <Row key={index} {...row} />
                    ))
                });
            });
        this.insertUpdate = this.insertUpdate.bind(this);
    }
    insertUpdate() {
        const orderid = document.getElementById('OrderID');
        const cusid = document.getElementById('CustomerID');
        const empid = document.getElementById('EmployeeID');
        const rowdata = {
            CustomerID: cusid.value,
            EmployeeID: +empid.value,
            OrderID: +orderid.value
        };
        if (!rowdata.OrderID) {
            return;
        }
        this.dataManager.update('OrderID', rowdata);
        this.dataManager.executeQuery(new Query())
            .then((e) => {
            this.setState({
                items: e.result.map((row,index) =>  (
                    <Row key={index} {...row} />
                ))
            });
        });
    }
    render() {
        return (<div><div style={this.style}>
            <input type="number" id='OrderID' placeholder="Order ID"/>
            <input type="text" id="CustomerID" placeholder="Customer ID"/>
            <input type="number" id="EmployeeID" placeholder="Employee ID"/>
            <input type="button" value="Update" id="manipulate" onClick={this.insertUpdate}/></div>
            <div><table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
            </table>
            </div></div>
        );
    }
}
