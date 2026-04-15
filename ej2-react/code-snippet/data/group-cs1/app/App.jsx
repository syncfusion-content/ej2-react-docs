import React, { useEffect, useState } from 'react';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { GroupRow } from './groupTemplate';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        new DataManager({
            url: SERVICE_URL,
            adaptor: new ODataV4Adaptor(),
        })
        .executeQuery(new Query().group('CustomerID').take(12))
        .then((e) => {
            const result = e.result.map((row, index) => (
            <GroupRow key={index} {...row} />
            ));
            setItems(result);
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
            {items}
        </table>
    );
};

export default App;