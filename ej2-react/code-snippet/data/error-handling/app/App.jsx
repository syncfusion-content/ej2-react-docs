import React, { useEffect, useState } from 'react';
import { DataManager, Deferred, ODataV4Adaptor, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';

const App = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('green');

  useEffect(() => {
    const initialDeferred = new Deferred();
    handleResult(initialDeferred);
    fetchDataWithAdaptor(SERVICE_URL, new ODataV4Adaptor(), initialDeferred);
  }, []);

  const fetchDataWithAdaptor = (url, adaptor, deferred) => {
    const manager = new DataManager({ url, adaptor, crossDomain: true });
    manager
      .executeQuery(new Query())
      .then((response) => {
        if ('result' in response) {
          deferred.resolve(response.result);
        }
      })
      .catch(() => {
        deferred.reject();
      });
  };

  const handleResult = (deferred) => {
    deferred.promise
      .then((result) => {
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

  const onChange = (args) => {
    const newDeferred = new Deferred();
    const useOrders = args.checked;

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
          {items.map((item, index) => (
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