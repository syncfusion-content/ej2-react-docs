import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const inlineStyle = { width: '376px' };
    return (<div style={inlineStyle}>
            <GridComponent dataSource={data} height='100%' width='100%'>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' width='120' textAlign='Right'/>
                <ColumnDirective field='CustomerID' width='150'/>
                <ColumnDirective field='EmployeeID' width='120' textAlign='Right'/>
                <ColumnDirective field='ShipCity' width='150'/>
                <ColumnDirective field='ShipCountry' width='150'/>
                <ColumnDirective field='ShipName' width='150'/>
              </ColumnsDirective>
           </GridComponent>
    </div>);
}
;
export default App;
