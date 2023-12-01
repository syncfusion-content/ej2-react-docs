
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
    public result: Object[] = new DataManager({ json: data })
        .executeLocal(new Query().search('VI', ['CustomerID']));
    
    public items: React.ReactElement[] = this.result.map((row: object, index) => (
        <Row key={index} {...row} />
    ));

    public render() {
        return (
            <table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{this.items}</tbody>
            </table>
        );
    }
}



