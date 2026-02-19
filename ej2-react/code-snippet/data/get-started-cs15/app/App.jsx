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
        this.removeRecord = this.removeRecord.bind(this);
    }
    removeRecord() {
        const orderid = document.getElementById('OrderID');
        const rowdata = {
            OrderID: +orderid.value,
        };
        if (!rowdata.OrderID) {
            return;
        }
        this.dataManager.remove('OrderID', rowdata);
        this.dataManager.executeQuery(new Query())
            .then((e) => {
            this.setState({
                items: e.result.map((row,index) => (
                    <Row key={index} {...row} />
                ))
            });
        });
    }
    render() {
        return (<div><div style={this.style}>
            <input type="number" id='OrderID' placeholder="Order ID"/>
            <input type="button" value="Remove" id="manipulate" onClick={this.removeRecord}/></div>
            <table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
            </table>
            </div>
        );
    }
}
