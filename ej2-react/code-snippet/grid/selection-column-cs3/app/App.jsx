import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let textBoxColumn;
  let columnIndex;
  const selectionSettings = { allowColumnSelection: true, type: 'Single' };
  const click = () => {
    columnIndex = parseInt(textBoxColumn.element.value, 10);
    if (!isNaN(columnIndex)) {
      grid.selectionModule.selectColumn(columnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the column index: </label>
      <TextBoxComponent ref={t1 => textBoxColumn = t1} width={120} ></TextBoxComponent>
    </div>
    <div style={{ padding: "10px 0 0px 5%" }}>
      <ButtonComponent id='button' onClick={click}>Select Row</ButtonComponent>
    </div>
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