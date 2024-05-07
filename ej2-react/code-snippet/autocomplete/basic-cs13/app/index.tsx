


import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // bind the DataManager instance to dataSource property
    private searchData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    // maps the appropriate column to fields property
    private fields: object = { value: 'ContactName' };
    // bind the Query instance to query property
    private query: Query = new Query().select(['ContactName', 'CustomerID']).take(10);
    // sort the resulted items
    private sortOrder: SortOrder = 'Ascending';
    public render() {
        return (
             // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" query={this.query} dataSource={this.searchData} sortOrder={this.sortOrder} filterType= "StartsWith" fields={this.fields} placeholder="Find a customer" minLength={3}/>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


