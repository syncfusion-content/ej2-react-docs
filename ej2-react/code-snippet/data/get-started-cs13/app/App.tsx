import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { Row } from './rowTemplate';

const App: React.FC = () => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const dataManagerRef = useRef<DataManager | null>(null);

  useEffect(() => {
    const dm = new DataManager({
      json: data.slice(0, 5),
      adaptor: new JsonAdaptor(),
    });

    dataManagerRef.current = dm;

    dm.executeQuery(new Query()).then((e: any) => {
      setItems(
        e.result.map((row: any, index: number) => (
          <Row key={index} {...row} />
        ))
      );
    });
  }, []);

  const insertUpdate = () => {
    const orderId = (document.getElementById('OrderID') as HTMLInputElement).value;
    const customerId = (document.getElementById('CustomerID') as HTMLInputElement).value;
    const employeeId = (document.getElementById('EmployeeID') as HTMLInputElement).value;

    if (!orderId || !dataManagerRef.current) {
      return;
    }

    const rowData = {
      OrderID: +orderId,
      CustomerID: customerId,
      EmployeeID: +employeeId,
    };

    dataManagerRef.current.insert(rowData);

    dataManagerRef.current.executeQuery(new Query()).then((e: any) => {
      setItems(
        e.result.map((row: any) => (
          <Row key={row.OrderID} {...row} />
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
        <input type="button" id="Insert" value="Insert" onClick={insertUpdate} />
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