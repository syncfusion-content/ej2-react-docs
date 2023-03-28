

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // bind the DataManager instance to dataSource property
    const employeeData: DataManager = new DataManager({
      adaptor: new ODataV4Adaptor,
      crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    const query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
    // maps the appropriate column to fields property
    const fields: object = { text: 'FirstName', value: 'EmployeeID' };
    // sort the resulted items
    const sortOrder: string = 'Ascending';
    // set the value to itemTemplate property

    return (
    // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" valueTemplate={valueTemplate = valueTemplate.bind(this)} query={query} itemTemplate={itemTemplate = itemTemplate.bind(this)} sortOrder={sortOrder} dataSource={employeeData} fields={fields} placeholder="Select an employee" />
    );

    function itemTemplate(data: any): JSX.Element {
      return (
       <span><span className='name'>{data.FirstName}</span><span className ='city'>{data.City}</span></span>
        );
    }
       // set the value to valueTemplate property
    function valueTemplate(data: any): JSX.Element {
      return (
          <span>{data.FirstName} - {data.City}</span>
      );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


