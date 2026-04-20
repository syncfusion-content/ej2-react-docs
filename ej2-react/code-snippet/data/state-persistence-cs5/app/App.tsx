import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DataManager, Query, ReturnOption, UrlAdaptor } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URL: string = 'https://services.syncfusion.com/react/production/api/UrlDataSource';

const App: React.FC = () => {
  const [items, setItems] = useState<IOrders[]>([]);
  const dataManagerRef = useRef<DataManager | null>(null);

  useEffect(() => {
    const dataManager = new DataManager({
      url: SERVICE_URL,
      adaptor: new UrlAdaptor(),
      enablePersistence: true,
      id: 'PersistClearState',
    });

    dataManagerRef.current = dataManager;

    const query = new Query().sortBy('Designation', 'descending').take(8);
    dataManager.executeQuery(query).then((e: ReturnOption) => {
      setItems(e.result as IOrders[]);
    });
  }, []);

  const applyDM = () => {
    if (!dataManagerRef.current) return;

    const newQuery = new Query().sortBy('EmployeeID', 'descending').take(8);
    dataManagerRef.current.executeQuery(newQuery).then((e: ReturnOption) => {
      setItems(e.result as IOrders[]);
    });
  };

  const clearDM = () => {
    dataManagerRef.current.clearPersistence();
  };

  return (
    <div>
      <div style={{ margin: '20px 60px', display: 'flex', gap: '10px' }}>
        <button onClick={applyDM}>Apply Query</button>
        <button onClick={clearDM}>Clear Persistence</button>
      </div>

      <table id="datatable" className="e-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employees</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {items.map((data: IOrders, index: number) => (
            <Row key={index} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;