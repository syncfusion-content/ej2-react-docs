import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel, ColumnSelectEventArgs, ColumnSelectingEventArgs, ColumnDeselectEventArgs } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState<string>();
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true };
  const columnSelected = (args: ColumnSelectEventArgs) => {
    setMessage('Trigger columnSelected');
    args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
  }
  const columnSelecting = (args: ColumnSelectingEventArgs) => {
    setMessage('Trigger columnSelecting');
    if (args.column.field === "CustomerID") {
      args.cancel = true;
    }
  }
  const columnDeselected = (args: ColumnDeselectEventArgs) => {
    setMessage('Trigger columnDeselected');
    args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
  }
  const columnDeselecting = (args: ColumnDeselectEventArgs) => {
    setMessage('Trigger columnDeselecting');
    if (args.column.field === "Freight") {
      args.cancel = true;
    }
  }

  return (<div>
    <p id='message'>{message}</p>
    <GridComponent dataSource={data} selectionSettings={selectionSettings} columnSelected={columnSelected} columnSelecting={columnSelecting} columnDeselected={columnDeselected} columnDeselecting={columnDeselecting}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right"/>
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;