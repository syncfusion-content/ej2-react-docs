

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const customAttributes: any = { class: 'customcss' };
  return <GridComponent dataSource={data} allowReordering={true} allowSelection={false} height={315}>
    <Inject services={[Reorder]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='ShipCity' width='100' lockColumn={true} customAttributes={{ class: 'customcss' }} />
      <ColumnDirective field='ShipName' width='100' />
      <ColumnDirective field='ShipPostalCode' width='120' />
      <ColumnDirective field='ShipRegion' width='140' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;


