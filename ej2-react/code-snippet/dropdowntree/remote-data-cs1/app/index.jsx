import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let data = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    let query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    let query1 = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    let fields = {
        dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    };
    return (
    // specifies the tag for render the DropDownTree component
    <DropDownTreeComponent id="dropdowntree" fields={fields}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
