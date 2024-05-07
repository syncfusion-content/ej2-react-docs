// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // bind the DataManager instance to dataSource property
    searchData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // maps the appropriate column to fields property
    fields = { value: "ContactName" };
    // bind the Query instance to query property
    query = new Query().from('Suppliers').select(["SupplierID", "ContactName"]).take(10);
    // sort the resulted items
    sortOrder = 'Ascending';
    render() {
        return (
        // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" query={this.query} dataSource={this.searchData} fields={this.fields} placeholder="Find a customer" filterType="StartsWith" sortOrder={this.sortOrder}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
