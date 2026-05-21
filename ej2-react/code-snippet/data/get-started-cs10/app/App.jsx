import React from 'react';
import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';

const App = () => {
    const result = new DataManager({
        json: data,
        adaptor: new JsonAdaptor(),
    }).executeLocal(
        new Query().page(1, 8)
    );

    const items = result.map((row, index) => (
        <Row key={index} {...row} />
    ));

    return (
        <table id="datatable" className="e-table">
            <thead>
                <tr>
                <th>Order ID</th>
                <th>Customer ID</th>
                <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </table>
    );
};

export default App;