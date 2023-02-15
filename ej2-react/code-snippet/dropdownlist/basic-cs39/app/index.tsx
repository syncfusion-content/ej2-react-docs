


// import DataManager related classes
import { DataManager, ODataV4Adaptor, Predicate, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // bind the DataManager instance to dataSource property
  private employeeData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
  });
  // form  predicate to fetch the grouped data
  private groupPredicate = new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle');
  // bind the Query instance to query property
  private query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(this.groupPredicate);
  // maps the appropriate column to fields property
  private fields: object = { text: 'FirstName', value: 'EmployeeID', groupBy: 'City' };
  // sort the resulted items
  private sortOrder: string = 'Ascending';

  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <DropDownListComponent id="ddlelement" query={this.query} groupTemplate={this.groupTemplate = this.groupTemplate.bind(this)} dataSource={this.employeeData} sortOrder={this.sortOrder} fields={this.fields} placeholder="Select an employee" />
    );
  }
  // set the value to groupTemplate
  private groupTemplate(data: any): JSX.Element {
    return (
      <strong>{data.City}</strong>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


