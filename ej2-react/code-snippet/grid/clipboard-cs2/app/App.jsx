import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const settings = { type: 'Multiple' };
  const copy = () => {
    if (grid) {
      grid.copy();
    }
  }

  const copyHeader = () => {
    if (grid) {
      grid.copy(true);
    }
  }
  return (<div>
    <ButtonComponent onClick={copy}>Copy</ButtonComponent>
    <ButtonComponent onClick={copyHeader}>CopyHeader</ButtonComponent>
    <GridComponent dataSource={data} height={280} ref={g => grid = g}
      selectionSettings={settings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
}
export default App;