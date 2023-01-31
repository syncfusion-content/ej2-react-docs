import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const settings = {
        allowColumnSelection: true,
        type: 'Multiple'
    };
    return (<GridComponent dataSource={data} selectionSettings={settings} height={315}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='ShipCity' width='100'/>
              <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
            </GridComponent>);
}
;
export default App;
