import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, RowDD, Inject } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
function App() {
    let grid;
    const selectOptions = { type: 'Multiple' };
    const rowDropOptions = { targetID: 'Grid' };
    const rowDrop = (args) => {
        args.cancel = true;
        let value = [];
        for (let r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        grid.reorderRows(value, args.dropIndex);
    };
    return <GridComponent id="Grid" ref={g => grid = g} allowRowDragAndDrop={true} dataSource={data} rowDrop={rowDrop} selectionSettings={selectOptions} rowDropSettings={rowDropOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field="OrderID" isPrimaryKey={true} headerText="Order ID" width="120" textAlign="Right"/>
      <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" textAlign="Center"/>
      <ColumnDirective field="OrderDate" headerText="Order Date" width="100" format="yMd" textAlign="Right"/>
      <ColumnDirective field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"/>
      <ColumnDirective field="ShipCity" headerText="Ship City" width="150" textAlign="Center"/>
      <ColumnDirective field="ShipCountry" headerText="Ship Country" width="150" textAlign="Center"/>
    </ColumnsDirective>
    <Inject services={[RowDD, Selection]}/>
  </GridComponent>;
}
;
export default App;
