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
      id: 'PersistGetData',
    });

    dataManager
      .executeQuery(new Query().sortBy('Designation', 'descending').take(8))
      .then((e) => {
        const result = e.result.map((row) => (
          <Row key={row.EmployeeID} {...row} />
        ));
        setItems(result);
      });

    console.log(dataManager.getPersistedData('PersistGetData'));
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