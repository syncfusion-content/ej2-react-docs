import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox1: TextBoxComponent | null;
  let textBox2: TextBoxComponent | null;
  let textBox3: TextBoxComponent | null;
  let textBox4: TextBoxComponent | null;
  let startRowIndex: number;
  let startColumnIndex: number;
  let endRowIndex: number;
  let endColumnIndex: number;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const click = () => {
    startRowIndex = parseInt((textBox1 as TextBoxComponent).value, 10);
    startColumnIndex = parseInt((textBox2 as TextBoxComponent).value, 10);
    endRowIndex = parseInt((textBox3 as TextBoxComponent).value, 10);
    endColumnIndex = parseInt((textBox4 as TextBoxComponent).value, 10);
    (grid as GridComponent).clearCellSelection();
    if (!isNaN(startRowIndex) && !isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex)) {
      (grid as GridComponent).selectCellsByRange({ rowIndex: startRowIndex, cellIndex: startColumnIndex }, { rowIndex: endRowIndex, cellIndex: endColumnIndex });
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start row index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t2 => textBox2 = t2} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end row index: </label>
      <TextBoxComponent ref={t3 => textBox3 = t3} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end column index: </label>
      <TextBoxComponent ref={t4 => textBox4 = t4} width={120} ></TextBoxComponent>
      <ButtonComponent id='button' onClick={click}>Select range of cell</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;