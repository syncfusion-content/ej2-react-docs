

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { ComboBoxComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(){
    // bind the DataManager instance to dataSource property
    const searchData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    // maps the appropriate column to fields property
    const fields: object = { text: 'ContactName', value: 'CustomerID' };
    // bind the Query instance to query property
    const query: Query = new Query().select(['ContactName', 'CustomerID']).take(6);
    // sort the resulted items
    const sortOrder: SortOrder = 'Ascending';

    // filtering event handler to filter a customer
   function onFiltering(e: FilteringEventArgs) {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.searchData);
        } else {
            let query: Query = new Query().select(["ContactName", "CustomerID"]);
            query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
            e.updateData(this.searchData, query);
        }
    }

    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" allowFiltering={true} popupHeight="250px" filtering={onFiltering} query={query} dataSource={searchData} fields={fields} placeholder="Select a customer" sortOrder={sortOrder} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


