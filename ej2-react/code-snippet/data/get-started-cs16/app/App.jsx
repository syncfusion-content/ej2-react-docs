import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { Row } from './rowTemplate';
export default class App extends React.Component {
    dm;
    style;
    changes;
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.style = { class: 'e-form' };
        this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
        this.dm = new DataManager(data.slice(0, 5));
        this.dm.executeQuery(new Query())
        .then((e) => {
            this.setState({
                items: e.result.map((row) => (
                    <Row key={row.OrderID} {...row} />
                ))
            });
        });
        this.action = this.action.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    action(event) {
        let action = event.currentTarget.getAttribute('value');
        action = (action === 'Update' ? 'changed' : action === 'Insert' ? 'added' : 'deleted') + 'Records';
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
        this.changes[action].push(rowdata);
        orderid.value = cusid.value = empid.value = '';
    }
    saveChanges() {
        this.dm.saveChanges(this.changes);
        this.dm.executeQuery(new Query())
            .then((e) => {
            this.setState({
                items: e.result.map((row) => (
                    <Row key={row.OrderID} {...row} />
                ))
            });
        });
        this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    }
    render() {
        return (<div><div style={this.style}>
            <input type="number" id='OrderID' placeholder="Order ID"/>
            <input type="text" id="CustomerID" placeholder="Customer ID"/>
            <input type="number" id="EmployeeID" placeholder="Employee ID"/>
            <input type="button" value="Insert" onClick={this.action}/>
            <input type="button" value="Update" onClick={this.action}/>
            <input type="button" value="Remove" onClick={this.action}/></div>
            <div style={this.style}>
                <label>Click to Save changes:</label>
                <input type="button" value="Save Changes" onClick={this.saveChanges}/></div>
            <div><table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
            </table></div></div>);
    }
}
