import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (<GridComponent dataSource={data} height={315}>
            <ColumnsDirective>
             <ColumnDirective type='checkbox' width='50'/>
             <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
             <ColumnDirective field='CustomerID' width='150'/>
             <ColumnDirective field='ShipCity' width='100'/>
             <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
           </GridComponent>);
}
;
export default App;
