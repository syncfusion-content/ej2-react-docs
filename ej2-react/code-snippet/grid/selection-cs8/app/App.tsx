

import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const rowSelected = () => {
    if (grid) {
      /** Get the selected row indexes */
      const selectedrowindex: number[] = grid.getSelectedRowIndexes();
      /** Get the selected records. */
      const selectedrecords: object[] = grid.getSelectedRecords();
      alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
    }
  }
    return (<GridComponent dataSource={data} height={315} rowSelected={rowSelected}
            ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='ShipCity' width='100'/>
              <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
            </GridComponent>)
};
export default App;


