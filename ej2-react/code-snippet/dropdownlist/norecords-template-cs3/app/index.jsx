// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // bind the DataManager instance to dataSource property
    customerData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/'
    });
    // bind the Query instance to query property
    query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    // maps the appropriate column to fields property
    fields = { text: 'ContactName', value: 'CustomerID' };
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" query={this.query} actionFailureTemplate={this.failureTemplate = this.failureTemplate.bind(this)} dataSource={this.customerData} fields={this.fields} placeholder="Select a customer"/>);
    }
    // set the value to action failure template
    failureTemplate(data) {
        return (<span className='action-failure'> Data fetch get fails</span>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
