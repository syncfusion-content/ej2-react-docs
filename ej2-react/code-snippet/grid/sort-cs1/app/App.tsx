import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return <GridComponent dataSource={data} allowSorting={true} height={300}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort]} />
  </GridComponent>
};
export default App;