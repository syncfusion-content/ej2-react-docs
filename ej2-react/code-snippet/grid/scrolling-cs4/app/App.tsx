

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return (<GridComponent dataSource={data} height={315} width={400}>
            <ColumnsDirective>
             <ColumnDirective field='OrderID' width='120' textAlign='Right'/>
             <ColumnDirective field='CustomerID' width='150'/>
             <ColumnDirective field='EmployeeID' width='120' textAlign='Right'/>
             <ColumnDirective field='ShipCity' width='150'/>
             <ColumnDirective field='ShipCountry' width='150'/>
             <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
           </GridComponent>)
};
export default App;


