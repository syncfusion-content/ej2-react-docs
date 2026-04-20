import React, { useEffect, useState } from 'react';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';
import { Row } from './rowTemplate';

const SERVICE_URL = 'https://services.syncfusion.com/react/production/api/UrlDataSource';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dataManager = new DataManager({
      url: SERVICE_URL,
      adaptor: new UrlAdaptor(),
      enablePersistence: true,
      id: 'PersistBasicPaging',
    });

    dataManager
      .executeQuery(new Query().skip(5).take(8))
      .then((e) => {
        const rows = e.result.map((row) => (
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