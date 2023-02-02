// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // bind the DataManager instance to dataSource property
    employeeData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
    // maps the appropriate column to fields property
    fields = { text: 'FirstName', value: 'EmployeeID' };
    // sort the resulted items
    sortOrder = 'Ascending';
    // set the value to itemTemplate property
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" valueTemplate={this.valueTemplate = this.valueTemplate.bind(this)} query={this.query} itemTemplate={this.itemTemplate = this.itemTemplate.bind(this)} sortOrder={this.sortOrder} dataSource={this.employeeData} fields={this.fields} placeholder="Select an employee"/>);
    }
    itemTemplate(data) {
        return (<span><span className='name'>{data.FirstName}</span><span className='city'>{data.City}</span></span>);
    }
    // set the value to valueTemplate property
    valueTemplate(data) {
        return (<span>{data.FirstName} - {data.City}</span>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
