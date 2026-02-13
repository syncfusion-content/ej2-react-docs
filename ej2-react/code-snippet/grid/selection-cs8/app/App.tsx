import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { useState } from 'react';

function App() {
  let grid: GridComponent | null;
  const [message, setMessage] = useState<boolean>(false);
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const click = () => {
    setSelectedRowIndexes((grid as GridComponent).getSelectedRowIndexes());
    setMessage((grid as GridComponent).getSelectedRowIndexes().length > 0);
  }
  return (<div>
    <div>
      <ButtonComponent id='button' onClick={click}>Get selected row indexes</ButtonComponent>
    </div>
    {message &&
      <p id="message" >Selected row indexes: {selectedRowIndexes}</p>}
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;