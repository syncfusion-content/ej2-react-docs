import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, ODataV4Adaptor, Query, ReturnOption, } from '@syncfusion/ej2-data';
import { Row } from './rowTemplate';
import { AggregateRow } from './aggregateTemplate';
import { IOrders } from './orders';

const SERVICE_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

interface AggregatesType {
  [key: string]: object;
}

const App: React.FC = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [aggregates, setAggregates] = useState<JSX.Element[]>([]);

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
      .then((e: ReturnOption) => {
        const aggValue = (e.aggregates as AggregatesType)['EmployeeID - min'];
        const aggregateRow = (
          <AggregateRow key="aggregate" min={aggValue} />
        );

        const rows = (e.result as IOrders[]).map((row: IOrders) => (
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