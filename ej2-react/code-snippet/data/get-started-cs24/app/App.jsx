import React, { useEffect, useState } from 'react';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { Row } from './rowTemplate';
import { AggregateRow } from './aggregateTemplate';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App = () => {
    const [items, setItems] = useState([]);
    const [aggregates, setAggregates] = useState([]);

  useEffect(() => {
    new DataManager({
      url: SERVICE_URL,
      adaptor: new ODataV4Adaptor(),
    })
      .executeQuery(
        new Query()
          .requiresCount()
          .take(5)
          .aggregate('min', 'EmployeeID')
      )
      .then((e) => {
        const aggValue = e.aggregates['EmployeeID - min'];
        const aggregateRow = (
          <AggregateRow key="aggregate" min={aggValue} />
        );

        const rows = e.result.map((row) => (
          <Row key={row.OrderID} {...row} />
        ));

        setItems(rows);
        setAggregates([aggregateRow]);
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
            <tfoot>{aggregates}</tfoot>
        </table>
    );
};

export default App;
