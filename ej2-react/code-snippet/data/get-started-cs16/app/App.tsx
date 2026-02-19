

import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { Row } from './rowTemplate';

export default class App extends React.Component<{}, {}>{
    public dataManager: DataManager;
    public style: { [x: string]: string };
    public changes: {
        addedRecords: object[],
        changedRecords: object[],  
        deletedRecords: object[]
    };
    constructor(props: object) {
        super(props);
        this.state = { items: [] };
        this.style = { class: 'e-form' };
        this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
        this.dataManager = new DataManager(data.slice(0, 5));
        this.dataManager.executeQuery(new Query())
        .then((e: ReturnOption) => {
            this.setState({
            items: (e.result as object[]).map((row: object) => (
                <Row key={row.OrderID} {...row} />
            ))
            });
        });
        this.action = this.action.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    public action(event: React.MouseEvent) {
        let action: string = event.currentTarget.getAttribute('value') as string;
        action = (action === 'Update' ? 'changed' : action === 'Insert' ? 'added' : 'deleted') + 'Records';
        const orderid: HTMLInputElement = document.getElementById('OrderID') as HTMLInputElement;
        const cusid: HTMLInputElement = document.getElementById('CustomerID') as HTMLInputElement;
        const empid: HTMLInputElement = document.getElementById('EmployeeID') as HTMLInputElement;
        const rowdata: { OrderID: number, CustomerID: string, EmployeeID: number } = {
            CustomerID: cusid.value,
            EmployeeID: +empid.value,
            OrderID: +orderid.value
        };
        if (!rowdata.OrderID) { return; }
        this.changes[action].push(rowdata);
        orderid.value = cusid.value = empid.value = '';
    }

    public saveChanges(): void {
        this.dataManager.saveChanges(this.changes);
        this.dataManager.executeQuery(new Query())
            .then((e: ReturnOption) => {
                this.setState({
                    items: (e.result as object[]).map((row: object) => (
                        <Row key={row.OrderID} {...row} />
                      ))
                });
            });
        this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    }

    public render() {
        return (<div><div style={this.style}>
            <input type="number" id='OrderID' placeholder="Order ID" />
            <input type="text" id="CustomerID" placeholder="Customer ID" />
            <input type="number" id="EmployeeID" placeholder="Employee ID" />
            <input type="button" value="Insert" onClick={this.action} />
            <input type="button" value="Update" onClick={this.action} />
            <input type="button" value="Remove" onClick={this.action} /></div>
            <div style={this.style}>
                <label>Click to Save changes:</label>
                <input type="button" value="Save Changes" onClick={this.saveChanges} /></div>
            <div><table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
            </table></div></div>
        )
    }
}


