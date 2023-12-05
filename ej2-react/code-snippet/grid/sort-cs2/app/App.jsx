import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const sortingOptions = {
    columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }]
  };
  return <GridComponent dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort]} />
  </GridComponent>;
}
;
export default App;
