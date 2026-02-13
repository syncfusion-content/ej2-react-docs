import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel, CellSelectEventArgs, CellSelectingEventArgs, CellDeselectEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState<string>();
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const cellSelected = (args: CellSelectEventArgs) => {
    setMessage('Trigger cellSelected');
    args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
  }
  const cellselecting = (args: CellSelectingEventArgs) => {
    setMessage('Trigger cellSelecting');
    if (args.data.ShipCountry === 'France') {
      args.cancel = true;
    }
  }
  const cellDeselected = (args: CellDeselectEventArgs) => {
    setMessage('Trigger cellDeselected');
    args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';
  }
  const cellDeselecting = (args: CellDeselectEventArgs) => {
    setMessage('Trigger cellDeselecting');
    args.cells[0].style.color = 'rgb(253, 253, 253)';
  }

  return (<div>
    <p id='message'>{message}</p>
    <GridComponent dataSource={data} selectionSettings={selectionSettings} cellSelected={cellSelected} cellSelecting={cellselecting} cellDeselected={cellDeselected} cellDeselecting={cellDeselecting}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;