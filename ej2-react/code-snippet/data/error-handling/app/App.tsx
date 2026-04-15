import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataManager, Deferred, ODataV4Adaptor, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { IOrders } from './orders';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';

const App: React.FC = () => {
  const [items, setItems] = useState<IOrders[]>([]);
  const [message, setMessage] = useState<string>('');
  const [messageColor, setMessageColor] = useState<string>('green');

  useEffect(() => {
    const initialDeferred = new Deferred();
    handleResult(initialDeferred);
    fetchDataWithAdaptor(SERVICE_URL, new ODataV4Adaptor(), initialDeferred);
  }, []);

  const fetchDataWithAdaptor = (
    url: string,
    adaptor: ODataV4Adaptor | UrlAdaptor,
    deferred: Deferred
  ) => {
    const manager = new DataManager({ url, adaptor, crossDomain: true });
    manager
      .executeQuery(new Query())
      .then((response: object) => {
        if ('result' in response) {
          deferred.resolve((response as { result: IOrders[] }).result);
        }
      })
      .catch((error: object) => {
        deferred.reject(error);
      });
  };

  const handleResult = (deferred: Deferred) => {
    (deferred.promise as Promise<IOrders[]>)
      .then((result: IOrders[]) => {
        setItems(result);
        setMessage('✅ Data loaded successfully');
        setMessageColor('green');
      })
      .catch(() => {
        setItems([]);
        setMessage('❌ Error loading data');
        setMessageColor('red');
      });
  };

  const onChange = (args: ChangeEventArgs) => {
    const newDeferred = new Deferred();
    const useOrders = args.checked as boolean;

    const newUrl = useOrders ? SERVICE_URL : CUSTOMER_URL;
    const newAdaptor = useOrders ? new ODataV4Adaptor() : new UrlAdaptor();

    handleResult(newDeferred);
    fetchDataWithAdaptor(newUrl, newAdaptor, newDeferred);
  };

  return (
    <div>
      <div id="container">
        <label id="switch-label">Toggle Data</label>
        <SwitchComponent cssClass="handle-text" change={onChange} />
      </div>

      <div id="message" style={{ color: messageColor }}>
        {message}
      </div>

      <table id="datatable" className="e-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: IOrders, index: number) => (
            <tr key={index}>
              <td>{item.OrderID}</td>
              <td>{item.CustomerID}</td>
              <td>{item.EmployeeID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;