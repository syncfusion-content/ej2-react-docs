import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DataManager, JsonAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
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

    dm.executeQuery(new Query()).then((e: ReturnOption) => {
      setItems(
        (e.result as object[]).map((row: object, index: number) => (
          <Row key={index} {...row} />
        ))
      );
    });
  }, []);

  const removeRecord = () => {
    if (!dataManagerRef.current) return;

    const orderId = (document.getElementById('OrderID') as HTMLInputElement).value;
    if (!orderId) return;

    const rowData = { OrderID: +orderId };

    dataManagerRef.current.remove('OrderID', rowData);

    dataManagerRef.current.executeQuery(new Query()).then((e: ReturnOption) => {
      setItems(
        (e.result as object[]).map((row: object, index: number) => (
          <Row key={index} {...row} />
        ))
      );
    });
  };

  return (
    <div>
      <div className="e-form">
        <input type="number" id="OrderID" placeholder="Order ID" />
        <input type="button" id="Remove" value="Remove" onClick={removeRecord} />
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
``