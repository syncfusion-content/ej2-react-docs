import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    let numeric;
    const onChange = () => {
        if (grid && numeric) {
            grid.selectionModule.selectRow(parseInt(numeric.getText(), 10));
        }
    };
    const rowSelected = (args) => {
        if (grid) {
            const rowHeight = grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
            grid.getContent().children[0].scrollTop =
                rowHeight * grid.getSelectedRowIndexes()[0];
        }
    };
    return (<div>
          <NumericTextBoxComponent format={'N'} placeholder='Enter index to select a row' width={200} showSpinButton={false} change={onChange} ref={n => numeric = n}/>
          <GridComponent dataSource={data} height="275" width="100%" rowSelected={rowSelected} ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='EmployeeID' width='120' textAlign="Right"/>
              <ColumnDirective field='ShipCity' width='150'/>
            </ColumnsDirective>
            </GridComponent></div>);
}
;
export default App;
