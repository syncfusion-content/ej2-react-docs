// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const customerData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'http://services.odata.org/V4/Northwind/Northwind.svcs/'
    });
    // bind the Query instance to query property
    const query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    // maps the appropriate column to fields property
    const fields = { text: 'ContactName', value: 'CustomerID' };
    // set the value to action failure template
    function failureTemplate(data) {
        return (<span className='action-failure'> Data fetch get fails</span>);
    }
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="mtselement" query={query} actionFailureTemplate={failureTemplate = failureTemplate.bind(this)} dataSource={customerData} fields={fields} placeholder="Select a customer"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
