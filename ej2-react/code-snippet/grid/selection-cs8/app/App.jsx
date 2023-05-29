import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const rowSelected = () => {
        if (grid) {
            /** Get the selected row indexes */
            const selectedrowindex = grid.getSelectedRowIndexes();
            /** Get the selected records. */
            const selectedrecords = grid.getSelectedRecords();
            alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
        }
    };
    return (<GridComponent dataSource={data} height={315} rowSelected={rowSelected} ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='ShipCity' width='100'/>
              <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
            </GridComponent>);
}
;
export default App;
