import React, { useEffect, useRef, useState } from 'react';
import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';

const App = () => {
    const [items, setItems] = useState([]);
    const dataManagerRef = useRef(null);
    const changesRef = useRef({
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

        dm.executeQuery(new Query()).then((e) => {
        setItems(
            e.result.map((row) => (
            <Row key={row.OrderID} {...row} />
            ))
        );
        });
    }, []);

    const action = (e) => {
        const type =
        e.target.value === 'Update'
            ? 'changedRecords'
            : e.target.value === 'Insert'
            ? 'addedRecords'
            : 'deletedRecords';

        const orderId = document.getElementById('OrderID').value;
        const customerId = document.getElementById('CustomerID').value;
        const employeeId = document.getElementById('EmployeeID').value;

        if (!orderId) return;

        changesRef.current[type].push({
            OrderID: +orderId,
            CustomerID: customerId,
            EmployeeID: +employeeId,
        });

        document.getElementById('OrderID').value = '';
        document.getElementById('CustomerID').value = '';
        document.getElementById('EmployeeID').value = '';
    };

    const saveChanges = () => {
        dataManagerRef.current.saveChanges(changesRef.current, 'OrderID');

        dataManagerRef.current.executeQuery(new Query()).then((e) => {
        setItems(
            e.result.map((row) => (
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