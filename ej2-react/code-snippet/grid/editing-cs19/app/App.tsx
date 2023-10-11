

import { ColumnDirective, ColumnsDirective, GridComponent, parentsUntil } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const gridTemplate = (props: any): any => {
    return (<div>
      <input id={props.OrderID} defaultValue={props.Freight} className='custemp' type='text' />
    </div>);
  }
  const created = (args): void => {
    grid.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
      if ((e.target as any).classList.contains('custemp')) { // Based on condition, you can find whether the target is an input element or not.
        let row = parentsUntil(e.target as any, 'e-row');
        let rowIndex = (row as any).rowIndex; // Get the row index.
        let uid = row.getAttribute('data-uid');
        let grid = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
        let rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
        (rowData as any).Freight = (e.target as any).value; // Update the new value for the corresponding column.
        grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
      }
    });
  }
  return <GridComponent dataSource={data} ref={g => grid = g} height={315} created={created}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='130' textAlign="Right" format='yMd' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
      <ColumnDirective field='Freight' headerText='Receipt Amount' width='140' template={gridTemplate} />
    </ColumnsDirective>
  </GridComponent>
};
export default App;


