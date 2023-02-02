

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // bind the DataManager instance to dataSource property
    const customerData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    const query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    // maps the appropriate column to fields property
    const fields: object = { value: 'ContactName' };
    // sort the resulted items
    const sortOrder: SortOrder = 'Ascending';

    return (
    // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" query={query} dataSource={customerData}
            fields={fields} sortOrder={sortOrder} placeholder="Find a customer"/>
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


