

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      <ColumnDirective field='Verified' headerText='Verified' displayAsCheckBox={true} width='150' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;


