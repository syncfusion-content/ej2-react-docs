import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let pivotObj;
    let dataSource = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders',
        adaptor: new ODataAdaptor(),
        crossDomain: true
    }, new Query().take(2));
    let dataSourceSettings = {
        dataSource: dataSource,
        expandAll: false,
        columns: [{ name: 'CustomerID', caption: 'Customer ID' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        values: [{ name: 'Freight' }]
    };
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
