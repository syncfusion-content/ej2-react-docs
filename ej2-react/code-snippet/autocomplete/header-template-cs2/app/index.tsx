

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(){
  // bind the DataManager instance to dataSource property
  const employeeData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  });
  // bind the Query instance to query property
  const query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
  // maps the appropriate column to fields property
  const fields: object = { value: 'FirstName' };
  // sort the resulted items
  const sortOrder: string = 'Ascending';

    return (
      // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" query={query} headerTemplate={headerTemplate} dataSource={employeeData} sortOrder={sortOrder} itemTemplate={itemTemplate} fields={fields} placeholder="Find an employee" />
    );

  // set the value to header template
  function headerTemplate(data: any): JSX.Element {
    return (
      <span className='head'><span className='name'>Name</span><span className='city'>City</span></span>
    );
  }
  // set the value to item template
  function itemTemplate(data: any): JSX.Element {
    return (
      <span className='item' ><span className='name'>{data.FirstName}</span><span className='city'>{data.City}</span></span>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


