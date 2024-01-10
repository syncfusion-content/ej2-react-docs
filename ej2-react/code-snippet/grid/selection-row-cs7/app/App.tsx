import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const [showMessage, setShowMessage] = useState<boolean>();
  const [selectedRecord, setSelectedRecord] = useState<number>(0);
  const selectionSettings: SelectionSettingsModel = { mode: 'Row', type: 'Multiple' };
  const showSelectedRecord = () => {
    setSelectedRecord((grid as GridComponent).getSelectedRecords().length);
    setShowMessage(selectedRecord > 0);
  }
  return (<div>
    <div>
      <ButtonComponent id='button' onClick={showSelectedRecord}>Selected Records count</ButtonComponent>
    </div>
    {showMessage &&
      <p id='message'>Selected record count:{selectedRecord}</p>}
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;