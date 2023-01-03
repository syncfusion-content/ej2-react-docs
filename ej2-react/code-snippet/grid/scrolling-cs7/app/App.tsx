

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-react-grids';
import { NumericTextBox, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  let numeric: NumericTextBox | null;
  const onChange = () => {
    if (grid && numeric) {
      grid.selectionModule.selectRow(parseInt(numeric.getText(), 10));
    }
  }
  const rowSelected = (args: RowSelectEventArgs) => {
    if (grid) {
      const rowHeight: number =
        grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
      grid.getContent().children[0].scrollTop =
        rowHeight * grid.getSelectedRowIndexes()[0];
    }
  }
    return (<div>
          <NumericTextBoxComponent format={'N'} placeholder='Enter index to select a row'
            width={200} showSpinButton={false} change={onChange}
            ref={n=> numeric = n}/>
          <GridComponent dataSource={data} height="275" width="100%"
            rowSelected={rowSelected} ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='EmployeeID' width='120' textAlign="Right"/>
              <ColumnDirective field='ShipCity' width='150'/>
            </ColumnsDirective>
            </GridComponent></div>)
};
export default App;


