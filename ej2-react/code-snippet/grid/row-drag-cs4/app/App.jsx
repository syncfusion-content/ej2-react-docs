import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDD } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionOptions = { type: 'Multiple' };
  const [message, setMessage] = useState('');
  const rowDragStartHelper = (args) => {
    setMessage('rowDragStartHelper event triggered');
    if (args.data[0].OrderID === 10248) {
      args.cancel = true;
    }
  }
  const rowDragStart = (args) => {
    setMessage('rowDragStart event triggered');
    args.cancel = true;
  }
  const rowDrag = (args) => {
    setMessage('rowDrag event triggered');
    args.rows.forEach((row) => {
      row.classList.add('drag-limit');
    });
  }
  const rowDrop = (args) => {
    setMessage('rowDrop event triggered');
    const value = [];
    for (let i = 0; i < args.rows.length; i++) {
      value.push(args.fromIndex + i);
    }
    if (grid) {
      grid.reorderRows(value, args.dropIndex);
    }
  }
  return (<div><div style={{ textAlign: "center" }}>
    <p style={{ color: "red" }} id="message">{message}</p>
  </div>
    <GridComponent ref={g => grid = g} dataSource={data} height={315} allowRowDragAndDrop={true} rowDrop={rowDrop} rowDragStartHelper={rowDragStartHelper} rowDrag={rowDrag} rowDragStart={rowDragStart} selectionSettings={selectionOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
        <ColumnDirective field='CustomerID' headerText='Customer Name' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' format='yMd' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
      </ColumnsDirective>
      <Inject services={[RowDD]} />
    </GridComponent>
  </div>)
};
export default App;


