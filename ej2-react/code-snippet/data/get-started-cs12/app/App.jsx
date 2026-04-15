import React, { useEffect, useState } from 'react';
import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { Row } from './rowTemplate';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new DataManager({
      url: SERVICE_URL,
      adaptor: new ODataV4Adaptor(),
    })
      .executeQuery(new Query().addParams('$top', '8'))
      .then((e) => {
        const rows = e.result.map((row) => (
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
      <tbody>{getValue('items', { items })}</tbody>
    </table>
  );
};

export default App;