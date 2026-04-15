import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, Group, ODataV4Adaptor, Query, ReturnOption, } from '@syncfusion/ej2-data';
import { GroupRow } from './groupTemplate';

const SERVICE_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App: React.FC = () => {
    const [items, setItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        new DataManager({
            url: SERVICE_URL,
            adaptor: new ODataV4Adaptor(),
        })
        .executeQuery(new Query().group('CustomerID').take(12))
        .then((e: ReturnOption) => {
            const result = (e.result as Group[]).map(
            (row: Group, index: number) => (
                <GroupRow key={index} {...row} />
            )
            );
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