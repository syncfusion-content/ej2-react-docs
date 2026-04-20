import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, UrlAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URL: string = 'https://services.syncfusion.com/react/production/api/UrlDataSource';

const App: React.FC = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const dataManager = new DataManager({
      url: SERVICE_URL,
      adaptor: new UrlAdaptor(),
      enablePersistence: true,
      id: 'PersistBasicPaging',
    });

    dataManager
      .executeQuery(new Query().skip(5).take(8))
      .then((e: ReturnOption) => {
        const rows = (e.result as IOrders[]).map((row: IOrders) => (
          <Row key={row.EmployeeID} {...row} />
        ));
        setItems(rows);
      });
  }, []);

  return (
    <table id="datatable" className="e-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employees</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
};

export default App;