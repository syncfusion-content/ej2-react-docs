

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"
        hideAtMedia='(min-width:700px)' /> // Column visibility hide when browser screen width lessthan 700px
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'
        hideAtMedia='(max-width:700px)' /> //Column Visibility show when browser screen width  500px or less
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'
        hideAtMedia='(min-width:500px)' /> //Column visibility hide when browser screen width lessthan 700px
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' /> //It is always shown
    </ColumnsDirective>
  </GridComponent>
}
export default App;


