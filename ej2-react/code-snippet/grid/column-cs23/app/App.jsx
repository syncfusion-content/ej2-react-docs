import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='150'/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
      <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' format="yMd"/>
      <ColumnDirective field='ShipCity' headerText='Ship City' visible={false} width='150'/>
    </ColumnsDirective>
  </GridComponent>;
}
;
export default App;
