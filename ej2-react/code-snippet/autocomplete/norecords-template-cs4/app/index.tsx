

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // bind the DataManager instance to dataSource property
  const customerData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/'
  });
  // bind the Query instance to query property
  const query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
  // maps the appropriate column to fields property
  const fields: object = { value: 'ContactName' };

    return (
      // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" query={query} actionFailureTemplate={template = template.bind(this)} dataSource={customerData} fields={fields} placeholder="Find a customer" />
    );

  // set the value to action failure template
  function template(): JSX.Element {
    return (
      <span className='action-failure'> Data fetch get fails</span>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


