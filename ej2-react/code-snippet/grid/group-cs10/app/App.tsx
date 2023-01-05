

import { ColumnDirective, ColumnsDirective, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const rowSelected = (args: RowSelectEventArgs): void => {
    alert("row index: " + (args.row as HTMLTableRowElement).getAttribute('aria-rowindex'));
    alert("column index: " + (args.target as HTMLElement).getAttribute('aria-colindex'));
  }
  return <GridComponent dataSource={data} rowSelected={rowSelected} height={267}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
  </GridComponent >
};
export default App;


