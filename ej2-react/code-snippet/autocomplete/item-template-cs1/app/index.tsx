


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
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
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
            <AutoCompleteComponent id="atcelement" query={this.query} itemTemplate={this.itemTemplate} dataSource={this.employeeData} fields={this.fields} sortOrder={this.sortOrder} placeholder="Find an employee"/>
        );
    }

    // set the value to itemTemplate property
    private itemTemplate(data: any): JSX.Element {
      return (
        <span><span className='name'>{data.FirstName}</span><span className ='city'>{data.City}</span></span>
        );
      }
}
ReactDOM.render(<App />, document.getElementById('sample'));


