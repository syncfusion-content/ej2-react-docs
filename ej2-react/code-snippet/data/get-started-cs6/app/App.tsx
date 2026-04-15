import * as React from 'react';
import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const App: React.FC = () => {
    const result = new DataManager({
        json: data,
        adaptor: new JsonAdaptor(),
    }).executeLocal(new Query().take(8)) as IOrders[];

    const items = result.map((row: IOrders, index: number) => (
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