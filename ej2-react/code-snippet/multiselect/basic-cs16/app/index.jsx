// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const searchData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    // maps the appropriate column to fields property
    const fields = { text: 'ContactName', value: 'CustomerID' };
    // bind the Query instance to query property
    const query = new Query().select(['ContactName', 'CustomerID']).take(7);
    // sort the resulted items
    const sortOrder = 'Ascending';
    // filtering event handler to filter a customer
    function onFiltering(e) {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.searchData);
        }
        else {
            let query = new Query().select(["ContactName", "CustomerID"]);
            // change the type of filtering
            query = (e.text !== '') ? query.where('ContactName', 'endsWith', e.text, true) : query;
            e.updateData(this.searchData, query);
        }
    }
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="mtselement" allowFiltering={true} popupHeight="250px" filtering={onFiltering} query={query} sortOrder={sortOrder} dataSource={searchData} fields={fields} placeholder="Select a customer"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
