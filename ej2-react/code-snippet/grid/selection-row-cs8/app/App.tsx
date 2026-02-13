import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel, RowSelectingEventArgs, RowDeselectEventArgs, RowSelectEventArgs } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState<string>();
  const selectionSettings: SelectionSettingsModel = { mode: 'Row', type: 'Multiple' };
  const rowSelected = (args: RowSelectEventArgs) => {
    setMessage('Trigger rowSelected');
    if (args.data.Freight > '10' || args.data.Freight <= '140')
      args.row.style.backgroundColor = 'rgb(96, 158, 101)';
  }
  const rowSelecting = (args: RowSelectingEventArgs) => {
    setMessage('Trigger rowSelecting');
    if (args.data.CustomerID === 'VINET')
      args.cancel = true;
  }
  const rowDeselected = (args: RowDeselectEventArgs) => {
    setMessage('Trigger rowDeselected');
    if (args.data.Freight <= '10')
      args.row.style.backgroundColor = 'red';
  }
  const rowDeselecting = (args: RowDeselectEventArgs) => {
    setMessage('Trigger rowDeselecting');
    if (args.data.Freight > '140')
      args.row.style.backgroundColor = 'yellow';
  }

  return (<div>
    <p id='message'>{message}</p>
    <GridComponent dataSource={data} selectionSettings={selectionSettings} enableHover={false} rowSelected={rowSelected} rowSelecting={rowSelecting} rowDeselected={rowDeselected} rowDeselecting={rowDeselecting}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right"/>
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;