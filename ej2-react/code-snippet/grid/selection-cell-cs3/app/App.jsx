import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups'
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { useState } from 'react';

function App() {
  let grid;
  let dialog;
  let selectedCellIndexes = [];
  const [dialogVisible, setDialogVisible] = useState(false);
  const selectionSettings = { mode: 'Cell', type: 'Multiple' };
  const pageOptions = { pageSize: 5 };
  const showSelectedRecord = () => {
    selectedCellIndexes = grid.getSelectedRowCellIndexes();
    setDialogVisible(true);
    dialog.content = `<p><b>Selected Cell Indexes:</b></p><br/>`
    for (let i = 0; i < selectedCellIndexes.length; i++) {
      dialog.content += `<p><li>Row: ${selectedCellIndexes[i].rowIndex}, cellIndex: ${selectedCellIndexes[i].cellIndexes} <p>`;
    }
  }
  const dialogClose = () => {
    setDialogVisible(false);
  }
  return (<div>
    <div>
      <ButtonComponent id='button' onClick={showSelectedRecord}>Show Selected Cell Indexes</ButtonComponent>
    </div>
    <DialogComponent ref={d => dialog = d} header="Selected Cell Indexes" visible={dialogVisible} showCloseIcon={true} width="350px" close={dialogClose} ></DialogComponent>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;