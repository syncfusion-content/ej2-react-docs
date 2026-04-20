import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DataManager, UrlAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URL: string = 'https://services.syncfusion.com/react/production/api/UrlDataSource';
const QUERY1 = new Query().sortBy('Designation', 'descending').take(8);
const QUERY2 = new Query().sortBy('EmployeeID', 'descending').take(8);

const App: React.FC = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const dataManagerRef = useRef<DataManager | null>(null);

  useEffect(() => {
    const dataManager = new DataManager({
      url: SERVICE_URL,
      adaptor: new UrlAdaptor(),
      enablePersistence: true,
      id: 'PersistSetData',
    });

    dataManagerRef.current = dataManager;

    dataManager.executeQuery(QUERY1).then((e: ReturnOption) => {
      const result = (e.result as IOrders[]).map((row: IOrders) => (
        <Row key={row.EmployeeID} {...row} />
      ));
      setItems(result);
    });

    dataManager.setPersistData(null, 'PersistSetData', QUERY2);
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default App;
