import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'  format='C' textAlign="Right"/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'  format='yMd' textAlign="Right"/>
    </ColumnsDirective>
  </GridComponent>;
}
;
export default App;
