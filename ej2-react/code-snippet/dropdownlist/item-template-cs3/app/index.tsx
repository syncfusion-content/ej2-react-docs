

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
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
    // bind the Query instance to query property
    private query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
    // maps the appropriate column to fields property
    private fields: object = { text: 'FirstName', value: 'EmployeeID' };
    // sort the resulted items
    private sortOrder: string = 'Ascending';
    // set the value to itemTemplate property

    public render() {
        return (
             // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" valueTemplate={this.valueTemplate = this.valueTemplate.bind(this)} query={this.query} itemTemplate={this.itemTemplate = this.itemTemplate.bind(this)} sortOrder={this.sortOrder} dataSource={this.employeeData} fields={this.fields} placeholder="Select an employee" />
        );
    }

    private itemTemplate(data: any): JSX.Element {
      return (
       <span><span className='name'>{data.FirstName}</span><span className ='city'>{data.City}</span></span>
        );
      }
       // set the value to valueTemplate property
     private valueTemplate(data: any): JSX.Element {
      return (
       <span>{data.FirstName} - {data.City}</span>
        );
      }
}
ReactDOM.render(<App />, document.getElementById('sample'));


