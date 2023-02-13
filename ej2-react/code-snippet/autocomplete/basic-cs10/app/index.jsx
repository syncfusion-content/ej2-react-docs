// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const searchData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // maps the appropriate column to fields property
    const fields = { value: "ContactName" };
    // bind the Query instance to query property
    const query = new Query().from('Suppliers').select(["SupplierID", "ContactName"]).take(10);
    // sort the resulted items
    const sortOrder = 'Ascending';
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" query={query} dataSource={searchData} fields={fields} placeholder="Find a customer" filterType="StartsWith" sortOrder={sortOrder}/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
