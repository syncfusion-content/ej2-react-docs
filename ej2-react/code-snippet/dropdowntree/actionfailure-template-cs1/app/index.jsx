import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let data = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svcs',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    let query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    let query1 = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    let fields = {
        dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    };
    function actionFailureTemplate() {
        return (<div className='action-failure'> Data fetch request fails </div>);
    }
    return (<DropDownTreeComponent fields={fields} actionFailureTemplate={actionFailureTemplate} placeholder="Select an employee" popupHeight="200px" />);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
