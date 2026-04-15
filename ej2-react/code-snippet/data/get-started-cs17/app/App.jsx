import React, { useEffect, useState } from 'react';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { Row } from './rowTemplate';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        new DataManager({
            url: SERVICE_URL,
            adaptor: new ODataV4Adaptor(),
        })
        .executeQuery(new Query().from('Orders').take(8))
        .then((e) => {
            const res = e.result.map((row) => (
            <Row key={row.OrderID} {...row} />
            ));
            setItems(res);
        });
    }, []);

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