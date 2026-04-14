import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App: React.FC = () => {
    const [items, setItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        new DataManager({
            url: SERVICE_URL,
            adaptor: new ODataV4Adaptor(),
        })
        .executeQuery(new Query().take(8))
        .then((e: ReturnOption) => {
            const rows = (e.result as IOrders[]).map((row: IOrders) => (
            <Row key={row.OrderID} {...row} />
            ));
            setItems(rows);
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