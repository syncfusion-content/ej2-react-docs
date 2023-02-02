


// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // bind the DataManager instance to dataSource property
    private customerData: DataManager = new DataManager({
      adaptor: new ODataV4Adaptor,
      crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    private query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    // maps the appropriate column to fields property
    private fields: object = { text: 'ContactName', value: 'CustomerID' };
    // sort the resulted items
    private sortOrder: SortOrder = 'Ascending';
    public onComplete(e: any){
    // initially result contains 6 items
        console.log("Before modified the result: " + e.result.length);
        // remove first 2 items from result.
        e.result.splice(0, 2);
        // now displays the result count is 4.
        console.log("After modified the result: " + e.result.length);
    }
    public render() {
        return (
              // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" query={this.query} dataSource={this.customerData}
            fields={this.fields} sortOrder={this.sortOrder} placeholder="Select a customer" actionComplete={this.onComplete} />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


