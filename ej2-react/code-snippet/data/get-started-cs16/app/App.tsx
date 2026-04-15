import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DataManager, JsonAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';

interface Changes {
  addedRecords: object[];
  changedRecords: object[];
  deletedRecords: object[];
}

const App: React.FC = () => {
    const [items, setItems] = useState<React.ReactNode[]>([]);
    const dataManagerRef = useRef<DataManager | null>(null);
    const changesRef = useRef<Changes>({
        addedRecords: [],
        changedRecords: [],
        deletedRecords: [],
    });

    useEffect(() => {
        const dm = new DataManager({
            json: data.slice(0, 5),
            adaptor: new JsonAdaptor(),
        });

        dataManagerRef.current = dm;

        dm.executeQuery(new Query()).then((e: ReturnOption) => {
        setItems(
            (e.result as object[]).map((row: any) => (
            <Row key={row.OrderID} {...row} />
            ))
        );
        });
    }, []);

    const action = (e: React.MouseEvent<HTMLInputElement>) => {
        let actionType =
        e.currentTarget.value === 'Update'
            ? 'changedRecords'
            : e.currentTarget.value === 'Insert'
            ? 'addedRecords'
            : 'deletedRecords';

        const orderId = (document.getElementById('OrderID') as HTMLInputElement).value;
        const customerId = (document.getElementById('CustomerID') as HTMLInputElement).value;
        const employeeId = (document.getElementById('EmployeeID') as HTMLInputElement).value;

        if (!orderId) return;

        const rowData = {
        OrderID: +orderId,
        CustomerID: customerId,
        EmployeeID: +employeeId,
        };

        changesRef.current[actionType].push(rowData);

        (document.getElementById('OrderID') as HTMLInputElement).value = '';
        (document.getElementById('CustomerID') as HTMLInputElement).value = '';
        (document.getElementById('EmployeeID') as HTMLInputElement).value = '';
    };

    const saveChanges = () => {
        if (!dataManagerRef.current) return;

        dataManagerRef.current.saveChanges(changesRef.current, 'OrderID');

        dataManagerRef.current.executeQuery(new Query()).then((e: ReturnOption) => {
        setItems(
            (e.result as object[]).map((row: any) => (
            <Row key={row.OrderID} {...row} />
            ))
        );
        });

        changesRef.current = {
            addedRecords: [],
            changedRecords: [],
            deletedRecords: [],
        };
    };

    return (
        <div>
        <div className="e-form">
            <input type="number" id="OrderID" placeholder="Order ID" />
            <input type="text" id="CustomerID" placeholder="Customer ID" />
            <input type="number" id="EmployeeID" placeholder="Employee ID" />
            <input type="button" id="Insert" value="Insert" onClick={action} />
            <input type="button" id="Update" value="Update" onClick={action} />
            <input type="button" id="Remove" value="Remove" onClick={action} />
        </div>

        <div className="e-form">
            <label>Click to Save changes:</label>
            <input type="button" id="Save" value="Save Changes" onClick={saveChanges} />
        </div>

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
        </div>
    );
};

export default App;