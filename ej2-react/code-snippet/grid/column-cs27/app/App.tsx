

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' type="number" textAlign="Right" headerTextAlign="Right" width='120' />
      <ColumnDirective field='CustomerID' type="string" textAlign="Left" headerTextAlign="Left" width='90' />
      <ColumnDirective field='OrderDate' format="yMd" type="date" textAlign="Center" headerTextAlign="Center" width='140' />
      <ColumnDirective field="ShipCountry" type="string" textAlign="Justify" headerTextAlign="Justify" width='120' />
    </ColumnsDirective>
  </GridComponent>
}
export default App;


