

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


export default class App extends React.Component<{}, {}> {
  // bind the DataManager instance to dataSource property
  private employeeData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  });
  // bind the Query instance to query property
  private query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
  // maps the appropriate column to fields property
  private fields: object = { value: 'FirstName' };
  // sort the resulted items
  private sortOrder: string = 'Ascending';

  public render() {
    return (
      // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" query={this.query} headerTemplate={this.headerTemplate} dataSource={this.employeeData} sortOrder={this.sortOrder} itemTemplate={this.itemTemplate} fields={this.fields} placeholder="Find an employee" />
    );
  }

  // set the value to header template
  private headerTemplate(data: any): JSX.Element {
    return (
      <span className='head'><span className='name'>Name</span><span className='city'>City</span></span>
    );
  }
  // set the value to item template
  private itemTemplate(data: any): JSX.Element {
    return (
      <span className='item' ><span className='name'>{data.FirstName}</span><span className='city'>{data.City}</span></span>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


