import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (
    <div>
      <GridComponent dataSource={data} height={315}  >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='90' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C2' width='90' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent></div>
  )
}
export default App;
