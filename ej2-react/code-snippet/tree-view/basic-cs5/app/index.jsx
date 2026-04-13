import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
function App() {
    let data = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    let query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    let query1 = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    let fields = { dataSource: data, query: query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
        child: { dataSource: data, query: query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
    };
    return (
    // specifies the tag for render the TreeView component
    <TreeViewComponent fields={fields}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
