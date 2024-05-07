// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const customerData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    const query = new Query().from('Customers').select(['ContactName', 'CustomerID']);
    // maps the appropriate column to fields property
    const fields = { value: 'ContactName' };
    // sort the resulted items
    const sortOrder = 'Ascending';
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" query={query} dataSource={customerData} fields={fields} placeholder="Find a customer" sortOrder={sortOrder} suggestionCount={2} filterType="StartsWith"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
