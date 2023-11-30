import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dataBound = (() => {
    let header = (grid as GridComponent).getHeaderContent().querySelector('.e-headercell');
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    let cell = (grid as GridComponent).getCellFromIndex(1, 2);
    cell.style.background = '#f9920b';
    cell.style.color = 'white';
  });
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} dataBound={dataBound}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
