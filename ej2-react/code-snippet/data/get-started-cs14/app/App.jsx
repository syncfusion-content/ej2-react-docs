import React, { useEffect, useRef, useState } from 'react';
import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';

const App = () => {
    const [items, setItems] = useState([]);
    const dataManagerRef = useRef(null);

    useEffect(() => {
        const dm = new DataManager({
            json: data.slice(0, 5),
            adaptor: new JsonAdaptor(),
        });

        dataManagerRef.current = dm;

        dm.executeQuery(new Query()).then((e) => {
        setItems(
            e.result.map((row, index) => (
            <Row key={index} {...row} />
            ))
        );
        });
    }, []);

    const updateRecord = () => {
        if (!dataManagerRef.current) return;

        const orderId = document.getElementById('OrderID').value;
        const customerId = document.getElementById('CustomerID').value;
        const employeeId = document.getElementById('EmployeeID').value;

        if (!orderId) return;

        const rowData = {
            OrderID: +orderId,
            CustomerID: customerId,
            EmployeeID: +employeeId,
        };

        dataManagerRef.current.update('OrderID', rowData);

        dataManagerRef.current.executeQuery(new Query()).then((e) => {
        setItems(
            e.result.map((row, index) => (
            <Row key={index} {...row} />
            ))
        );
        });
    };

    return (
        <div>
        <div className="e-form">
            <input type="number" id="OrderID" placeholder="Order ID" />
            <input type="text" id="CustomerID" placeholder="Customer ID" />
            <input type="number" id="EmployeeID" placeholder="Employee ID" />
            <input type="button" id="Update" value="Update" onClick={updateRecord} />
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