import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
function App() {
    const data = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Orders'
    });
    return <GridComponent dataSource={data} height={315}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
    </GridComponent>;
}
;
export default App;
