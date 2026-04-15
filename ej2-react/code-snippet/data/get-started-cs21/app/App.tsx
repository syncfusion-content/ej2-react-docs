import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, ODataV4Adaptor, Predicate, Query, ReturnOption, } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

const App: React.FC = () => {
    const [items, setItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        let predicate: Predicate = new Predicate('EmployeeID', 'equal', 3);
        predicate = predicate.or('EmployeeID', 'equal', 2);

        new DataManager({
            url: SERVICE_URL,
            adaptor: new ODataV4Adaptor(),
        })
        .executeQuery(new Query().where(predicate).take(8))
        .then((e: ReturnOption) => {
            const result = (e.result as IOrders[]).map((row: IOrders) => (
            <Row key={row.OrderID} {...row} />
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
            <tbody>{items}</tbody>
        </table>
    );
};

export default App;